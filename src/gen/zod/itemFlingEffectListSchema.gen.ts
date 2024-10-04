import { z } from "@/utils/zod.ts";
import { paginatedItemFlingEffectSummaryListSchema } from "./paginatedItemFlingEffectSummaryListSchema.gen";


export const itemFlingEffectListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ItemFlingEffectListQueryParamsSchema = z.infer<typeof itemFlingEffectListQueryParamsSchema>;

 export const itemFlingEffectList200Schema = z.lazy(() => paginatedItemFlingEffectSummaryListSchema);
export type ItemFlingEffectList200Schema = z.infer<typeof itemFlingEffectList200Schema>;

 export const itemFlingEffectListQueryResponseSchema = z.lazy(() => paginatedItemFlingEffectSummaryListSchema);
export type ItemFlingEffectListQueryResponseSchema = z.infer<typeof itemFlingEffectListQueryResponseSchema>;