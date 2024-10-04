import { z } from "@/utils/zod.ts";
import { paginatedLocationAreaSummaryListSchema } from "./paginatedLocationAreaSummaryListSchema.gen";


export const locationAreaListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional() }).optional();
export type LocationAreaListQueryParamsSchema = z.infer<typeof locationAreaListQueryParamsSchema>;

 export const locationAreaList200Schema = z.lazy(() => paginatedLocationAreaSummaryListSchema);
export type LocationAreaList200Schema = z.infer<typeof locationAreaList200Schema>;

 export const locationAreaListQueryResponseSchema = z.lazy(() => paginatedLocationAreaSummaryListSchema);
export type LocationAreaListQueryResponseSchema = z.infer<typeof locationAreaListQueryResponseSchema>;