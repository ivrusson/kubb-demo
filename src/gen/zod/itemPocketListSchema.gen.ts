import { z } from "@/utils/zod.ts";
import { paginatedItemPocketSummaryListSchema } from "./paginatedItemPocketSummaryListSchema.gen";


export const itemPocketListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ItemPocketListQueryParamsSchema = z.infer<typeof itemPocketListQueryParamsSchema>;

 export const itemPocketList200Schema = z.lazy(() => paginatedItemPocketSummaryListSchema);
export type ItemPocketList200Schema = z.infer<typeof itemPocketList200Schema>;

 export const itemPocketListQueryResponseSchema = z.lazy(() => paginatedItemPocketSummaryListSchema);
export type ItemPocketListQueryResponseSchema = z.infer<typeof itemPocketListQueryResponseSchema>;