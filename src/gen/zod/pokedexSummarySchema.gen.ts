import { z } from "@/utils/zod.ts";


export const pokedexSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokedexSummarySchema = z.infer<typeof pokedexSummarySchema>;