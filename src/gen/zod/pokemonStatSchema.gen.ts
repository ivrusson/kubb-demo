import { statSummarySchema } from "./statSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonStatSchema = z.object({ "base_stat": z.number().int(), "effort": z.number().int(), "stat": z.lazy(() => statSummarySchema) });
export type PokemonStatSchema = z.infer<typeof pokemonStatSchema>;