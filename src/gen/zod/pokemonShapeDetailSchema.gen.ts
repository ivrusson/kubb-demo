import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonShapeDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "awesome_names": z.array(z.object({ "awesome_name": z.string(), "language": z.object({ "name": z.string(), "url": z.string().url() }) })), "names": z.array(z.object({ "url": z.string().url(), "name": z.string() })), "pokemon_species": z.array(z.lazy(() => pokemonSpeciesSummarySchema)) });
export type PokemonShapeDetailSchema = z.infer<typeof pokemonShapeDetailSchema>;