import { router } from "../trpc";
import { coffeeRouter } from "./coffee";

export const appRouter = router({
  coffee: coffeeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
