import { addGalleryImageZ, deleteGalleryImageZ } from "~/zod/galleryZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const galleryRouter = createTRPCRouter({
  addImage: protectedProcedure
    .input(addGalleryImageZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.galleryImage.create({
        data: input,
      });
    }),

  deleteImage: protectedProcedure
    .input(deleteGalleryImageZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.galleryImage.delete({
        where: { id: input.id },
      });
    }),

  getAllImages: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
});
