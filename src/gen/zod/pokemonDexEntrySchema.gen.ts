import { pokedexSummarySchema } from "./pokedexSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonDexEntrySchema = z.object({ "entry_number": z.number().int(), "pokedex": z.lazy(() => pokedexSummarySchema) });
export type PokemonDexEntrySchema = z.infer<typeof pokemonDexEntrySchema>;