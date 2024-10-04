import { pokemonColorNameSchema } from "./pokemonColorNameSchema.gen";
import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonColorDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => pokemonColorNameSchema)), "pokemon_species": z.array(z.lazy(() => pokemonSpeciesSummarySchema)) });
export type PokemonColorDetailSchema = z.infer<typeof pokemonColorDetailSchema>;