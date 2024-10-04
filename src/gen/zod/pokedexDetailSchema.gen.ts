import { pokedexDescriptionSchema } from "./pokedexDescriptionSchema.gen";
import { pokedexNameSchema } from "./pokedexNameSchema.gen";
import { regionSummarySchema } from "./regionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokedexDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "is_main_series": z.boolean().optional(), "descriptions": z.array(z.lazy(() => pokedexDescriptionSchema)), "names": z.array(z.lazy(() => pokedexNameSchema)), "pokemon_entries": z.array(z.object({ "entry_number": z.number().int(), "pokemon_species": z.object({ "name": z.string(), "url": z.string().url() }) })), "region": z.lazy(() => regionSummarySchema), "version_groups": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type PokedexDetailSchema = z.infer<typeof pokedexDetailSchema>;