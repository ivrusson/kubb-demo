import { z } from "@/utils/zod.ts";
import { paginatedMoveMetaAilmentSummaryListSchema } from "./paginatedMoveMetaAilmentSummaryListSchema.gen";


export const moveAilmentListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveAilmentListQueryParamsSchema = z.infer<typeof moveAilmentListQueryParamsSchema>;

 export const moveAilmentList200Schema = z.lazy(() => paginatedMoveMetaAilmentSummaryListSchema);
export type MoveAilmentList200Schema = z.infer<typeof moveAilmentList200Schema>;

 export const moveAilmentListQueryResponseSchema = z.lazy(() => paginatedMoveMetaAilmentSummaryListSchema);
export type MoveAilmentListQueryResponseSchema = z.infer<typeof moveAilmentListQueryResponseSchema>;