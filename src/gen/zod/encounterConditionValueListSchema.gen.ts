import { z } from "@/utils/zod.ts";
import { paginatedEncounterConditionValueSummaryListSchema } from "./paginatedEncounterConditionValueSummaryListSchema.gen";


export const encounterConditionValueListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EncounterConditionValueListQueryParamsSchema = z.infer<typeof encounterConditionValueListQueryParamsSchema>;

 export const encounterConditionValueList200Schema = z.lazy(() => paginatedEncounterConditionValueSummaryListSchema);
export type EncounterConditionValueList200Schema = z.infer<typeof encounterConditionValueList200Schema>;

 export const encounterConditionValueListQueryResponseSchema = z.lazy(() => paginatedEncounterConditionValueSummaryListSchema);
export type EncounterConditionValueListQueryResponseSchema = z.infer<typeof encounterConditionValueListQueryResponseSchema>;