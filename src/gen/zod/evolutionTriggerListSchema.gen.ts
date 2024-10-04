import { z } from "@/utils/zod.ts";
import { paginatedEvolutionTriggerSummaryListSchema } from "./paginatedEvolutionTriggerSummaryListSchema.gen";


export const evolutionTriggerListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EvolutionTriggerListQueryParamsSchema = z.infer<typeof evolutionTriggerListQueryParamsSchema>;

 export const evolutionTriggerList200Schema = z.lazy(() => paginatedEvolutionTriggerSummaryListSchema);
export type EvolutionTriggerList200Schema = z.infer<typeof evolutionTriggerList200Schema>;

 export const evolutionTriggerListQueryResponseSchema = z.lazy(() => paginatedEvolutionTriggerSummaryListSchema);
export type EvolutionTriggerListQueryResponseSchema = z.infer<typeof evolutionTriggerListQueryResponseSchema>;