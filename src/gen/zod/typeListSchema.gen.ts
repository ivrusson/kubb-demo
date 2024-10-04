import { z } from "@/utils/zod.ts";
import { paginatedTypeSummaryListSchema } from "./paginatedTypeSummaryListSchema.gen";


export const typeListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type TypeListQueryParamsSchema = z.infer<typeof typeListQueryParamsSchema>;

 export const typeList200Schema = z.lazy(() => paginatedTypeSummaryListSchema);
export type TypeList200Schema = z.infer<typeof typeList200Schema>;

 export const typeListQueryResponseSchema = z.lazy(() => paginatedTypeSummaryListSchema);
export type TypeListQueryResponseSchema = z.infer<typeof typeListQueryResponseSchema>;