import { z } from "@/utils/zod.ts";
import { paginatedMoveBattleStyleSummaryListSchema } from "./paginatedMoveBattleStyleSummaryListSchema.gen";


export const moveBattleStyleListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveBattleStyleListQueryParamsSchema = z.infer<typeof moveBattleStyleListQueryParamsSchema>;

 export const moveBattleStyleList200Schema = z.lazy(() => paginatedMoveBattleStyleSummaryListSchema);
export type MoveBattleStyleList200Schema = z.infer<typeof moveBattleStyleList200Schema>;

 export const moveBattleStyleListQueryResponseSchema = z.lazy(() => paginatedMoveBattleStyleSummaryListSchema);
export type MoveBattleStyleListQueryResponseSchema = z.infer<typeof moveBattleStyleListQueryResponseSchema>;