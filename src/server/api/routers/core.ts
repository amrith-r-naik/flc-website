import { TRPCError } from "@trpc/server";
import { facultyZ, officeBearerZ } from "prisma/schemaZ";
import { z } from "zod";

import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { addOfficeBearerZ } from "~/zod/core";

const coreRouter = createTRPCRouter({
  // Create
  addOfficeBearer: adminProcedure
    .input(addOfficeBearerZ)
    .mutation(async ({ ctx, input }) => {
      
      const core = await ctx.db.core.findFirst({});

      if (core) {
        
        const updatedOfficeBearers = [...core.officeBearers, input] 
        type OfficeBearerType = z.infer<typeof officeBearerZ>;
        
        await ctx.db.core.updateMany({
          data: {
            
            officeBearers: updatedOfficeBearers as OfficeBearerType[],
          },
        });

        console.log("Successfully added the office bearer to the existing record.");
      } else {
        // Create a new core record with the input as the initial officeBearers
        await ctx.db.core.create({
          data: {
            faculty: [], 
            officeBearers: [input], 
          },
        });

        console.log("Core record not found. Created a new core record with the input data.");
      }
    }),

  // Retrieve
  getCore: publicProcedure.query(async ({ ctx }) => {
    const unparsedCore = await ctx.db.core.findFirstOrThrow();

    const {
      success: facultySuccess,
      data: parsedFaculty,
      error: facultyParsingError,
    } = z.array(facultyZ).safeParse(unparsedCore.faculty);

    if (!facultySuccess)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Failed to parse faculties: ${facultyParsingError?.message}`,
      });

    console.log(parsedFaculty);

    const {
      success: officeBearer,
      data: parsedOfficeBearers,
      error: officeBearersParsingError,
    } = z.array(officeBearerZ).safeParse(unparsedCore.officeBearers);

    if (!officeBearer) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Failed to parse office bearers: ${officeBearersParsingError?.message}`,
      });
    }

    return {
      ...unparsedCore,
      faculty: parsedFaculty,
      officeBearers: parsedOfficeBearers,
    };
  }),
});

export default coreRouter;
