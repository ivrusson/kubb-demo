import { z } from "@/utils/zod.ts";


export const pokemonSpeciesSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokemonSpeciesSummarySchema = z.infer<typeof pokemonSpeciesSummarySchema>;