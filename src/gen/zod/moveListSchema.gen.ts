import { z } from "@/utils/zod.ts";
import { paginatedMoveSummaryListSchema } from "./paginatedMoveSummaryListSchema.gen";


export const moveListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveListQueryParamsSchema = z.infer<typeof moveListQueryParamsSchema>;

 export const moveList200Schema = z.lazy(() => paginatedMoveSummaryListSchema);
export type MoveList200Schema = z.infer<typeof moveList200Schema>;

 export const moveListQueryResponseSchema = z.lazy(() => paginatedMoveSummaryListSchema);
export type MoveListQueryResponseSchema = z.infer<typeof moveListQueryResponseSchema>;