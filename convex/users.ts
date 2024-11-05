// import { query } from "./_generated/server";
// import { getAuthUserId } from "@convex-dev/auth/server";

// export const current = query({
//   args: {},
//   handler: async (ctx) => {
//     const userId = await getAuthUserId(ctx);
//     return userId !== null ? ctx.db.get(userId) : null;
//   },
// });

import { query } from "./_generated/server";
import { auth } from "./auth";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) {
      return null;
    }
    return await ctx.db.get(userId);
  },
});
