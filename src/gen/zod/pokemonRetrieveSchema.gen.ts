import { z } from "@/utils/zod.ts";
import { pokemonDetailSchema } from "./pokemonDetailSchema.gen";


export const pokemonRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonRetrievePathParamsSchema = z.infer<typeof pokemonRetrievePathParamsSchema>;

 export const pokemonRetrieve200Schema = z.lazy(() => pokemonDetailSchema);
export type PokemonRetrieve200Schema = z.infer<typeof pokemonRetrieve200Schema>;

 export const pokemonRetrieveQueryResponseSchema = z.lazy(() => pokemonDetailSchema);
export type PokemonRetrieveQueryResponseSchema = z.infer<typeof pokemonRetrieveQueryResponseSchema>;