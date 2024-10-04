import { z } from "@/utils/zod.ts";
import { pokemonColorDetailSchema } from "./pokemonColorDetailSchema.gen";


export const pokemonColorRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonColorRetrievePathParamsSchema = z.infer<typeof pokemonColorRetrievePathParamsSchema>;

 export const pokemonColorRetrieve200Schema = z.lazy(() => pokemonColorDetailSchema);
export type PokemonColorRetrieve200Schema = z.infer<typeof pokemonColorRetrieve200Schema>;

 export const pokemonColorRetrieveQueryResponseSchema = z.lazy(() => pokemonColorDetailSchema);
export type PokemonColorRetrieveQueryResponseSchema = z.infer<typeof pokemonColorRetrieveQueryResponseSchema>;