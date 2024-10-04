import { versionSummarySchema } from "./versionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonGameIndexSchema = z.object({ "game_index": z.number().int(), "version": z.lazy(() => versionSummarySchema) });
export type PokemonGameIndexSchema = z.infer<typeof pokemonGameIndexSchema>;