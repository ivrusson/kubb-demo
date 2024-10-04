import { z } from "@/utils/zod.ts";
import { paginatedLocationSummaryListSchema } from "./paginatedLocationSummaryListSchema.gen";


export const locationListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type LocationListQueryParamsSchema = z.infer<typeof locationListQueryParamsSchema>;

 export const locationList200Schema = z.lazy(() => paginatedLocationSummaryListSchema);
export type LocationList200Schema = z.infer<typeof locationList200Schema>;

 export const locationListQueryResponseSchema = z.lazy(() => paginatedLocationSummaryListSchema);
export type LocationListQueryResponseSchema = z.infer<typeof locationListQueryResponseSchema>;