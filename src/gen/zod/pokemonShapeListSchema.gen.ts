import { z } from "@/utils/zod.ts";
import { paginatedPokemonShapeSummaryListSchema } from "./paginatedPokemonShapeSummaryListSchema.gen";


export const pokemonShapeListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokemonShapeListQueryParamsSchema = z.infer<typeof pokemonShapeListQueryParamsSchema>;

 export const pokemonShapeList200Schema = z.lazy(() => paginatedPokemonShapeSummaryListSchema);
export type PokemonShapeList200Schema = z.infer<typeof pokemonShapeList200Schema>;

 export const pokemonShapeListQueryResponseSchema = z.lazy(() => paginatedPokemonShapeSummaryListSchema);
export type PokemonShapeListQueryResponseSchema = z.infer<typeof pokemonShapeListQueryResponseSchema>;