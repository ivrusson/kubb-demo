import { z } from "@/utils/zod.ts";
import { paginatedStatSummaryListSchema } from "./paginatedStatSummaryListSchema.gen";


export const statListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type StatListQueryParamsSchema = z.infer<typeof statListQueryParamsSchema>;

 export const statList200Schema = z.lazy(() => paginatedStatSummaryListSchema);
export type StatList200Schema = z.infer<typeof statList200Schema>;

 export const statListQueryResponseSchema = z.lazy(() => paginatedStatSummaryListSchema);
export type StatListQueryResponseSchema = z.infer<typeof statListQueryResponseSchema>;