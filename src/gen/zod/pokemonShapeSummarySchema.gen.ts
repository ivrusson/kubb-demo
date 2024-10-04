import { z } from "@/utils/zod.ts";


export const pokemonShapeSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokemonShapeSummarySchema = z.infer<typeof pokemonShapeSummarySchema>;