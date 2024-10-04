import { z } from "@/utils/zod.ts";
import { paginatedPokemonHabitatSummaryListSchema } from "./paginatedPokemonHabitatSummaryListSchema.gen";


export const pokemonHabitatListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonHabitatListQueryParamsSchema = z.infer<typeof pokemonHabitatListQueryParamsSchema>;

 export const pokemonHabitatList200Schema = z.lazy(() => paginatedPokemonHabitatSummaryListSchema);
export type PokemonHabitatList200Schema = z.infer<typeof pokemonHabitatList200Schema>;

 export const pokemonHabitatListQueryResponseSchema = z.lazy(() => paginatedPokemonHabitatSummaryListSchema);
export type PokemonHabitatListQueryResponseSchema = z.infer<typeof pokemonHabitatListQueryResponseSchema>;