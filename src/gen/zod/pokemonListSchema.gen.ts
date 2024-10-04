import { z } from "@/utils/zod.ts";
import { paginatedPokemonSummaryListSchema } from "./paginatedPokemonSummaryListSchema.gen";


export const pokemonListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonListQueryParamsSchema = z.infer<typeof pokemonListQueryParamsSchema>;

 export const pokemonList200Schema = z.lazy(() => paginatedPokemonSummaryListSchema);
export type PokemonList200Schema = z.infer<typeof pokemonList200Schema>;

 export const pokemonListQueryResponseSchema = z.lazy(() => paginatedPokemonSummaryListSchema);
export type PokemonListQueryResponseSchema = z.infer<typeof pokemonListQueryResponseSchema>;