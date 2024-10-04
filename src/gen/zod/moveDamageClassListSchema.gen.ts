import { z } from "@/utils/zod.ts";
import { paginatedMoveDamageClassSummaryListSchema } from "./paginatedMoveDamageClassSummaryListSchema.gen";


export const moveDamageClassListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveDamageClassListQueryParamsSchema = z.infer<typeof moveDamageClassListQueryParamsSchema>;

 export const moveDamageClassList200Schema = z.lazy(() => paginatedMoveDamageClassSummaryListSchema);
export type MoveDamageClassList200Schema = z.infer<typeof moveDamageClassList200Schema>;

 export const moveDamageClassListQueryResponseSchema = z.lazy(() => paginatedMoveDamageClassSummaryListSchema);
export type MoveDamageClassListQueryResponseSchema = z.infer<typeof moveDamageClassListQueryResponseSchema>;