import { z } from "@/utils/zod.ts";
import { paginatedGenderSummaryListSchema } from "./paginatedGenderSummaryListSchema.gen";


export const genderListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type GenderListQueryParamsSchema = z.infer<typeof genderListQueryParamsSchema>;

 export const genderList200Schema = z.lazy(() => paginatedGenderSummaryListSchema);
export type GenderList200Schema = z.infer<typeof genderList200Schema>;

 export const genderListQueryResponseSchema = z.lazy(() => paginatedGenderSummaryListSchema);
export type GenderListQueryResponseSchema = z.infer<typeof genderListQueryResponseSchema>;