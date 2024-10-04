import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonColorNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type PokemonColorNameSchema = z.infer<typeof pokemonColorNameSchema>;