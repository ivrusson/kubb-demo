import { z } from "@/utils/zod.ts";
import { pokemonFormDetailSchema } from "./pokemonFormDetailSchema.gen";


export const pokemonFormRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonFormRetrievePathParamsSchema = z.infer<typeof pokemonFormRetrievePathParamsSchema>;

 export const pokemonFormRetrieve200Schema = z.lazy(() => pokemonFormDetailSchema);
export type PokemonFormRetrieve200Schema = z.infer<typeof pokemonFormRetrieve200Schema>;

 export const pokemonFormRetrieveQueryResponseSchema = z.lazy(() => pokemonFormDetailSchema);
export type PokemonFormRetrieveQueryResponseSchema = z.infer<typeof pokemonFormRetrieveQueryResponseSchema>;