import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const coffeeRouter = router({
  get: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        message: `You're going to drink a ${input?.text ?? "coffee"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
