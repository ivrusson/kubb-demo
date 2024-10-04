import { z } from "@/utils/zod.ts";


export const pokemonColorSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokemonColorSummarySchema = z.infer<typeof pokemonColorSummarySchema>;