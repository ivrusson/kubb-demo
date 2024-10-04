import { z } from "@/utils/zod.ts";
import { paginatedPokedexSummaryListSchema } from "./paginatedPokedexSummaryListSchema.gen";


export const pokedexListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokedexListQueryParamsSchema = z.infer<typeof pokedexListQueryParamsSchema>;

 export const pokedexList200Schema = z.lazy(() => paginatedPokedexSummaryListSchema);
export type PokedexList200Schema = z.infer<typeof pokedexList200Schema>;

 export const pokedexListQueryResponseSchema = z.lazy(() => paginatedPokedexSummaryListSchema);
export type PokedexListQueryResponseSchema = z.infer<typeof pokedexListQueryResponseSchema>;