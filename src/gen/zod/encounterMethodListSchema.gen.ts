import { z } from "@/utils/zod.ts";
import { paginatedEncounterMethodSummaryListSchema } from "./paginatedEncounterMethodSummaryListSchema.gen";


export const encounterMethodListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EncounterMethodListQueryParamsSchema = z.infer<typeof encounterMethodListQueryParamsSchema>;

 export const encounterMethodList200Schema = z.lazy(() => paginatedEncounterMethodSummaryListSchema);
export type EncounterMethodList200Schema = z.infer<typeof encounterMethodList200Schema>;

 export const encounterMethodListQueryResponseSchema = z.lazy(() => paginatedEncounterMethodSummaryListSchema);
export type EncounterMethodListQueryResponseSchema = z.infer<typeof encounterMethodListQueryResponseSchema>;