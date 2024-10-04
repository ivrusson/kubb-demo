import { z } from "@/utils/zod.ts";
import { paginatedItemSummaryListSchema } from "./paginatedItemSummaryListSchema.gen";


export const itemListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ItemListQueryParamsSchema = z.infer<typeof itemListQueryParamsSchema>;

 export const itemList200Schema = z.lazy(() => paginatedItemSummaryListSchema);
export type ItemList200Schema = z.infer<typeof itemList200Schema>;

 export const itemListQueryResponseSchema = z.lazy(() => paginatedItemSummaryListSchema);
export type ItemListQueryResponseSchema = z.infer<typeof itemListQueryResponseSchema>;