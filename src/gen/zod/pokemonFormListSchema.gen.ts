import { z } from "@/utils/zod.ts";
import { paginatedPokemonFormSummaryListSchema } from "./paginatedPokemonFormSummaryListSchema.gen";


export const pokemonFormListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonFormListQueryParamsSchema = z.infer<typeof pokemonFormListQueryParamsSchema>;

 export const pokemonFormList200Schema = z.lazy(() => paginatedPokemonFormSummaryListSchema);
export type PokemonFormList200Schema = z.infer<typeof pokemonFormList200Schema>;

 export const pokemonFormListQueryResponseSchema = z.lazy(() => paginatedPokemonFormSummaryListSchema);
export type PokemonFormListQueryResponseSchema = z.infer<typeof pokemonFormListQueryResponseSchema>;