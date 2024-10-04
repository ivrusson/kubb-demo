import { z } from "@/utils/zod.ts";
import { paginatedMoveLearnMethodSummaryListSchema } from "./paginatedMoveLearnMethodSummaryListSchema.gen";


export const moveLearnMethodListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveLearnMethodListQueryParamsSchema = z.infer<typeof moveLearnMethodListQueryParamsSchema>;

 export const moveLearnMethodList200Schema = z.lazy(() => paginatedMoveLearnMethodSummaryListSchema);
export type MoveLearnMethodList200Schema = z.infer<typeof moveLearnMethodList200Schema>;

 export const moveLearnMethodListQueryResponseSchema = z.lazy(() => paginatedMoveLearnMethodSummaryListSchema);
export type MoveLearnMethodListQueryResponseSchema = z.infer<typeof moveLearnMethodListQueryResponseSchema>;