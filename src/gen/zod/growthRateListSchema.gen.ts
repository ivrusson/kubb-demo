import { z } from "@/utils/zod.ts";
import { paginatedGrowthRateSummaryListSchema } from "./paginatedGrowthRateSummaryListSchema.gen";


export const growthRateListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type GrowthRateListQueryParamsSchema = z.infer<typeof growthRateListQueryParamsSchema>;

 export const growthRateList200Schema = z.lazy(() => paginatedGrowthRateSummaryListSchema);
export type GrowthRateList200Schema = z.infer<typeof growthRateList200Schema>;

 export const growthRateListQueryResponseSchema = z.lazy(() => paginatedGrowthRateSummaryListSchema);
export type GrowthRateListQueryResponseSchema = z.infer<typeof growthRateListQueryResponseSchema>;