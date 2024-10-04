import { z } from "@/utils/zod.ts";
import { paginatedItemCategorySummaryListSchema } from "./paginatedItemCategorySummaryListSchema.gen";


export const itemCategoryListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ItemCategoryListQueryParamsSchema = z.infer<typeof itemCategoryListQueryParamsSchema>;

 export const itemCategoryList200Schema = z.lazy(() => paginatedItemCategorySummaryListSchema);
export type ItemCategoryList200Schema = z.infer<typeof itemCategoryList200Schema>;

 export const itemCategoryListQueryResponseSchema = z.lazy(() => paginatedItemCategorySummaryListSchema);
export type ItemCategoryListQueryResponseSchema = z.infer<typeof itemCategoryListQueryResponseSchema>;