import { TRPCError } from "@trpc/server";

import { addVerificationTokenToWhitelist } from "~/services/auth.service";
import { getUserByEmail } from "~/utils/auth/auth";
import { generateVerificationToken } from "~/utils/auth/jwt";
import { sendVerificationEmail } from "~/utils/nodemailer";

export const sendVerificationEmailMutation: (
  email: string,
) => Promise<void> = async (email) => {
  const existingUser = await getUserByEmail(email);

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

  const verificationToken = generateVerificationToken(existingUser, token);

  const url = `https://www.finiteloop.co.in/auth/verify-email?token=${verificationToken}`;

  await sendVerificationEmail(existingUser.email, url, existingUser.name);
};
