import { z } from "@/utils/zod.ts";
import { paginatedContestTypeSummaryListSchema } from "./paginatedContestTypeSummaryListSchema.gen";


export const contestTypeListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type ContestTypeListQueryParamsSchema = z.infer<typeof contestTypeListQueryParamsSchema>;

 export const contestTypeList200Schema = z.lazy(() => paginatedContestTypeSummaryListSchema);
export type ContestTypeList200Schema = z.infer<typeof contestTypeList200Schema>;

 export const contestTypeListQueryResponseSchema = z.lazy(() => paginatedContestTypeSummaryListSchema);
export type ContestTypeListQueryResponseSchema = z.infer<typeof contestTypeListQueryResponseSchema>;