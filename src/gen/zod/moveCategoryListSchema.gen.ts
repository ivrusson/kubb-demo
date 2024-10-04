import { z } from "@/utils/zod.ts";
import { paginatedMoveMetaCategorySummaryListSchema } from "./paginatedMoveMetaCategorySummaryListSchema.gen";


export const moveCategoryListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveCategoryListQueryParamsSchema = z.infer<typeof moveCategoryListQueryParamsSchema>;

 export const moveCategoryList200Schema = z.lazy(() => paginatedMoveMetaCategorySummaryListSchema);
export type MoveCategoryList200Schema = z.infer<typeof moveCategoryList200Schema>;

 export const moveCategoryListQueryResponseSchema = z.lazy(() => paginatedMoveMetaCategorySummaryListSchema);
export type MoveCategoryListQueryResponseSchema = z.infer<typeof moveCategoryListQueryResponseSchema>;