import { z } from "@/utils/zod.ts";
import { paginatedNatureSummaryListSchema } from "./paginatedNatureSummaryListSchema.gen";


export const natureListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type NatureListQueryParamsSchema = z.infer<typeof natureListQueryParamsSchema>;

 export const natureList200Schema = z.lazy(() => paginatedNatureSummaryListSchema);
export type NatureList200Schema = z.infer<typeof natureList200Schema>;

 export const natureListQueryResponseSchema = z.lazy(() => paginatedNatureSummaryListSchema);
export type NatureListQueryResponseSchema = z.infer<typeof natureListQueryResponseSchema>;