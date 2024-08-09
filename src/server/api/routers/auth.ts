import { TRPCError } from "@trpc/server";
import jwt, {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "jsonwebtoken";

import { env } from "~/env";
import {
  addPasswordResetTokenToWhitelist,
  addVerificationTokenToWhitelist,
  revokeVerificationToken,
} from "~/services/auth.service";
import { getUserByEmail, getUserById, hashPassword } from "~/utils/auth/auth";
import {
  findVerificationTokenById,
  generatePasswordResetToken,
  generateVerificationToken,
  secrets,
} from "~/utils/auth/jwt";
import { somethingWentWrong } from "~/utils/error";
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from "~/utils/nodemailer/nodemailer";
import {
  RegisterZ,
  ResetPasswordZ,
  SendPasswordResetZ,
  SendVerifyEmailZ,
  VerifyEmailZ,
} from "~/zod/authZ";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure.input(RegisterZ).mutation(async ({ ctx, input }) => {
    if (ctx.session?.user ?? ctx.session)
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You are already logged in",
      });

    const { name, email, password, phone, year, branchId } = input;

    try {
      const existingUser = await getUserByEmail(email);

      if (existingUser && !existingUser.emailVerified)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Please verify your email and Login",
        });

      if (existingUser)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Account already exists",
        });

      //TODO: Implement year typechecks

      const hashedPassword = await hashPassword(password);
      if (!hashPassword) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }

      const user = await ctx.db.user.create({
        data: {
          name,
          email,
          password: hashedPassword!,
          phone: phone,
          year, // TODO(Omkar) Yet to be resolved
          Branch: {
            connect: {
              id: branchId,
            },
          },
        },
      });

      return user;
    } catch (error) {
      console.error(error);
      somethingWentWrong(error);
    }
  }),

  sendVerifyEmail: publicProcedure
    .input(SendVerifyEmailZ)
    .mutation(async ({ input }) => {
      try {
        const existingUser = await getUserByEmail(input.email);

        if (!existingUser)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not found",
          });

        if (existingUser.emailVerified)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User already verified",
          });

        const { id: token } = await addVerificationTokenToWhitelist({
          userId: existingUser.id,
        });

        const verificationToken = generateVerificationToken(
          existingUser,
          token,
        );

        const url = `${env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`;

        await sendVerificationEmail(existingUser.email, url, existingUser.name);
      } catch (e) {
        console.error(e);
        somethingWentWrong(e);
      }
    }),

  verifyEmail: publicProcedure
    .input(VerifyEmailZ)
    .mutation(async ({ ctx, input }) => {
      try {
        const payload = jwt.verify(
          input.token,
          secrets.JWT_VERIFICATION_SECRET,
        ) as jwt.JwtPayload;

        const savedToken = await findVerificationTokenById(payload.jti!);

        if (!savedToken || savedToken.revoked == true) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid token",
          });
        }
        const user = await getUserById(payload.userId as number);
        if (!user) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid token",
          });
        }
        const verifiedUser = await ctx.db.user.update({
          where: {
            id: user.id,
          },
          data: {
            emailVerified: new Date(),
          },
        });

        await revokeVerificationToken(savedToken.id);

        return verifiedUser;
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          console.error("Token has expired:", error);
        } else if (error instanceof NotBeforeError) {
          console.error("Token not active:", error.message);
        } else if (error instanceof JsonWebTokenError) {
          console.error("JWT Error:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
        throw error;
      }
    }),

  sendPasswordResetEmail: publicProcedure
    .input(SendPasswordResetZ)
    .mutation(async ({ input }) => {
      const { email } = input;
      try {
        const existingUser = await getUserByEmail(email);

        if (!existingUser)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not found",
          });

        if (!existingUser.emailVerified)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not verified",
          });

        const { id: token } = await addPasswordResetTokenToWhitelist({
          userId: existingUser.id,
        });

        const passwordResetToken = generatePasswordResetToken(
          existingUser,
          token,
        );

        const url = `${env.NEXTAUTH_URL}/auth/new-password?token=${passwordResetToken}`;

        await sendPasswordResetEmail(
          existingUser.email,
          url,
          existingUser.name,
        );
      } catch (e) {
        console.error(e);
        somethingWentWrong(e);
      }
    }),

  resetPassword: publicProcedure
    .input(ResetPasswordZ)
    .mutation(async ({ ctx, input }) => {
      const { token, newPassword } = input;

      try {
        const payload = jwt.verify(
          token,
          secrets.JWT_PASSWORD_RESET_SECRET,
        ) as jwt.JwtPayload;

        const savedToken = await findVerificationTokenById(payload.jti!);
        if (!savedToken || savedToken.revoked == true) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid token",
          });
        }
        const user = await getUserById(payload.userId as number);
        if (!user) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid token",
          });
        }

        const hashedPassword = await hashPassword(newPassword);
        const verifiedUser = await ctx.db.user.update({
          where: {
            id: user.id,
          },
          data: {
            password: hashedPassword!,
          },
        });

        await revokeVerificationToken(savedToken.id);

        return verifiedUser;
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          console.error("Token has expired:", error);
        } else if (error instanceof NotBeforeError) {
          console.error("Token not active:", error.message);
        } else if (error instanceof JsonWebTokenError) {
          console.error("JWT Error:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
        throw error;
      }
    }),
  revokeTokenOnSignout: protectedProcedure.mutation(async ({ ctx }) => {
    const { user } = ctx.session;

    try {
      await ctx.db.refreshToken.updateMany({
        where: {
          userId: user.id,
          revoked: false,
        },
        data: {
          revoked: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  }),
});
