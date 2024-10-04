import { z } from "@/utils/zod.ts";
import { pokemonSpeciesDetailSchema } from "./pokemonSpeciesDetailSchema.gen";


export const pokemonSpeciesRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonSpeciesRetrievePathParamsSchema = z.infer<typeof pokemonSpeciesRetrievePathParamsSchema>;

 export const pokemonSpeciesRetrieve200Schema = z.lazy(() => pokemonSpeciesDetailSchema);
export type PokemonSpeciesRetrieve200Schema = z.infer<typeof pokemonSpeciesRetrieve200Schema>;

 export const pokemonSpeciesRetrieveQueryResponseSchema = z.lazy(() => pokemonSpeciesDetailSchema);
export type PokemonSpeciesRetrieveQueryResponseSchema = z.infer<typeof pokemonSpeciesRetrieveQueryResponseSchema>;