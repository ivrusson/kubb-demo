import { languageSummarySchema } from "./languageSummarySchema.gen";
import { versionSummarySchema } from "./versionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonSpeciesFlavorTextSchema = z.object({ "flavor_text": z.string(), "language": z.lazy(() => languageSummarySchema), "version": z.lazy(() => versionSummarySchema) });
export type PokemonSpeciesFlavorTextSchema = z.infer<typeof pokemonSpeciesFlavorTextSchema>;