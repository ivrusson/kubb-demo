import { z } from "@/utils/zod.ts";


export const pokemonSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokemonSummarySchema = z.infer<typeof pokemonSummarySchema>;