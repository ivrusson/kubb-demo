import { z } from "@/utils/zod.ts";
import { paginatedEvolutionChainSummaryListSchema } from "./paginatedEvolutionChainSummaryListSchema.gen";


export const evolutionChainListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EvolutionChainListQueryParamsSchema = z.infer<typeof evolutionChainListQueryParamsSchema>;

 export const evolutionChainList200Schema = z.lazy(() => paginatedEvolutionChainSummaryListSchema);
export type EvolutionChainList200Schema = z.infer<typeof evolutionChainList200Schema>;

 export const evolutionChainListQueryResponseSchema = z.lazy(() => paginatedEvolutionChainSummaryListSchema);
export type EvolutionChainListQueryResponseSchema = z.infer<typeof evolutionChainListQueryResponseSchema>;