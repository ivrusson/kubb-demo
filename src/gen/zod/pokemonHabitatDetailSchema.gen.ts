import { pokemonHabitatNameSchema } from "./pokemonHabitatNameSchema.gen";
import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonHabitatDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => pokemonHabitatNameSchema)), "pokemon_species": z.array(z.lazy(() => pokemonSpeciesSummarySchema)) });
export type PokemonHabitatDetailSchema = z.infer<typeof pokemonHabitatDetailSchema>;