import { z } from "@/utils/zod.ts";
import { paginatedContestEffectSummaryListSchema } from "./paginatedContestEffectSummaryListSchema.gen";


export const contestEffectListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ContestEffectListQueryParamsSchema = z.infer<typeof contestEffectListQueryParamsSchema>;

 export const contestEffectList200Schema = z.lazy(() => paginatedContestEffectSummaryListSchema);
export type ContestEffectList200Schema = z.infer<typeof contestEffectList200Schema>;

 export const contestEffectListQueryResponseSchema = z.lazy(() => paginatedContestEffectSummaryListSchema);
export type ContestEffectListQueryResponseSchema = z.infer<typeof contestEffectListQueryResponseSchema>;