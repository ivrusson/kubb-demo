import { z } from "@/utils/zod.ts";
import { paginatedPokemonColorSummaryListSchema } from "./paginatedPokemonColorSummaryListSchema.gen";


export const pokemonColorListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonColorListQueryParamsSchema = z.infer<typeof pokemonColorListQueryParamsSchema>;

 export const pokemonColorList200Schema = z.lazy(() => paginatedPokemonColorSummaryListSchema);
export type PokemonColorList200Schema = z.infer<typeof pokemonColorList200Schema>;

 export const pokemonColorListQueryResponseSchema = z.lazy(() => paginatedPokemonColorSummaryListSchema);
export type PokemonColorListQueryResponseSchema = z.infer<typeof pokemonColorListQueryResponseSchema>;