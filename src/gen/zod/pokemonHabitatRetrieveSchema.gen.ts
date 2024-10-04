import { z } from "@/utils/zod.ts";
import { pokemonHabitatDetailSchema } from "./pokemonHabitatDetailSchema.gen";


export const pokemonHabitatRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokemonHabitatRetrievePathParamsSchema = z.infer<typeof pokemonHabitatRetrievePathParamsSchema>;

 export const pokemonHabitatRetrieve200Schema = z.lazy(() => pokemonHabitatDetailSchema);
export type PokemonHabitatRetrieve200Schema = z.infer<typeof pokemonHabitatRetrieve200Schema>;

 export const pokemonHabitatRetrieveQueryResponseSchema = z.lazy(() => pokemonHabitatDetailSchema);
export type PokemonHabitatRetrieveQueryResponseSchema = z.infer<typeof pokemonHabitatRetrieveQueryResponseSchema>;