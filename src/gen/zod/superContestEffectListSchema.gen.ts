import { z } from "@/utils/zod.ts";
import { paginatedSuperContestEffectSummaryListSchema } from "./paginatedSuperContestEffectSummaryListSchema.gen";


export const superContestEffectListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type SuperContestEffectListQueryParamsSchema = z.infer<typeof superContestEffectListQueryParamsSchema>;

 export const superContestEffectList200Schema = z.lazy(() => paginatedSuperContestEffectSummaryListSchema);
export type SuperContestEffectList200Schema = z.infer<typeof superContestEffectList200Schema>;

 export const superContestEffectListQueryResponseSchema = z.lazy(() => paginatedSuperContestEffectSummaryListSchema);
export type SuperContestEffectListQueryResponseSchema = z.infer<typeof superContestEffectListQueryResponseSchema>;