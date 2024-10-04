import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonHabitatNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type PokemonHabitatNameSchema = z.infer<typeof pokemonHabitatNameSchema>;