import { z } from "@/utils/zod.ts";
import { paginatedRegionSummaryListSchema } from "./paginatedRegionSummaryListSchema.gen";


export const regionListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type RegionListQueryParamsSchema = z.infer<typeof regionListQueryParamsSchema>;

 export const regionList200Schema = z.lazy(() => paginatedRegionSummaryListSchema);
export type RegionList200Schema = z.infer<typeof regionList200Schema>;

 export const regionListQueryResponseSchema = z.lazy(() => paginatedRegionSummaryListSchema);
export type RegionListQueryResponseSchema = z.infer<typeof regionListQueryResponseSchema>;