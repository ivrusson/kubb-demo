import { z } from "@/utils/zod.ts";
import { paginatedMoveTargetSummaryListSchema } from "./paginatedMoveTargetSummaryListSchema.gen";


export const moveTargetListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MoveTargetListQueryParamsSchema = z.infer<typeof moveTargetListQueryParamsSchema>;

 export const moveTargetList200Schema = z.lazy(() => paginatedMoveTargetSummaryListSchema);
export type MoveTargetList200Schema = z.infer<typeof moveTargetList200Schema>;

 export const moveTargetListQueryResponseSchema = z.lazy(() => paginatedMoveTargetSummaryListSchema);
export type MoveTargetListQueryResponseSchema = z.infer<typeof moveTargetListQueryResponseSchema>;