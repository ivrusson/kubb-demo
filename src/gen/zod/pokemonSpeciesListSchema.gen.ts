import { z } from "@/utils/zod.ts";
import { paginatedPokemonSpeciesSummaryListSchema } from "./paginatedPokemonSpeciesSummaryListSchema.gen";


export const pokemonSpeciesListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonSpeciesListQueryParamsSchema = z.infer<typeof pokemonSpeciesListQueryParamsSchema>;

 export const pokemonSpeciesList200Schema = z.lazy(() => paginatedPokemonSpeciesSummaryListSchema);
export type PokemonSpeciesList200Schema = z.infer<typeof pokemonSpeciesList200Schema>;

 export const pokemonSpeciesListQueryResponseSchema = z.lazy(() => paginatedPokemonSpeciesSummaryListSchema);
export type PokemonSpeciesListQueryResponseSchema = z.infer<typeof pokemonSpeciesListQueryResponseSchema>;