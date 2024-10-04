import { z } from "@/utils/zod.ts";
import { paginatedItemAttributeSummaryListSchema } from "./paginatedItemAttributeSummaryListSchema.gen";


export const itemAttributeListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ItemAttributeListQueryParamsSchema = z.infer<typeof itemAttributeListQueryParamsSchema>;

 export const itemAttributeList200Schema = z.lazy(() => paginatedItemAttributeSummaryListSchema);
export type ItemAttributeList200Schema = z.infer<typeof itemAttributeList200Schema>;

 export const itemAttributeListQueryResponseSchema = z.lazy(() => paginatedItemAttributeSummaryListSchema);
export type ItemAttributeListQueryResponseSchema = z.infer<typeof itemAttributeListQueryResponseSchema>;