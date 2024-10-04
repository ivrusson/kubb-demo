import { z } from "@/utils/zod.ts";
import { paginatedEncounterConditionSummaryListSchema } from "./paginatedEncounterConditionSummaryListSchema.gen";


export const encounterConditionListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EncounterConditionListQueryParamsSchema = z.infer<typeof encounterConditionListQueryParamsSchema>;

 export const encounterConditionList200Schema = z.lazy(() => paginatedEncounterConditionSummaryListSchema);
export type EncounterConditionList200Schema = z.infer<typeof encounterConditionList200Schema>;

 export const encounterConditionListQueryResponseSchema = z.lazy(() => paginatedEncounterConditionSummaryListSchema);
export type EncounterConditionListQueryResponseSchema = z.infer<typeof encounterConditionListQueryResponseSchema>;