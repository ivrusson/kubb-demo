import { z } from "@/utils/zod.ts";
import { pokemonShapeDetailSchema } from "./pokemonShapeDetailSchema.gen";


export const pokemonShapeRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonShapeRetrievePathParamsSchema = z.infer<typeof pokemonShapeRetrievePathParamsSchema>;

 export const pokemonShapeRetrieve200Schema = z.lazy(() => pokemonShapeDetailSchema);
export type PokemonShapeRetrieve200Schema = z.infer<typeof pokemonShapeRetrieve200Schema>;

 export const pokemonShapeRetrieveQueryResponseSchema = z.lazy(() => pokemonShapeDetailSchema);
export type PokemonShapeRetrieveQueryResponseSchema = z.infer<typeof pokemonShapeRetrieveQueryResponseSchema>;