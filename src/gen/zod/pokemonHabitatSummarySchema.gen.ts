import { z } from "@/utils/zod.ts";


export const pokemonHabitatSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokemonHabitatSummarySchema = z.infer<typeof pokemonHabitatSummarySchema>;