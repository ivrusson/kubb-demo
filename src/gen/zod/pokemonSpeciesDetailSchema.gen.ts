import { growthRateSummarySchema } from "./growthRateSummarySchema.gen";
import { pokemonDexEntrySchema } from "./pokemonDexEntrySchema.gen";
import { pokemonColorSummarySchema } from "./pokemonColorSummarySchema.gen";
import { pokemonShapeSummarySchema } from "./pokemonShapeSummarySchema.gen";
import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { evolutionChainSummarySchema } from "./evolutionChainSummarySchema.gen";
import { pokemonHabitatSummarySchema } from "./pokemonHabitatSummarySchema.gen";
import { generationSummarySchema } from "./generationSummarySchema.gen";
import { pokemonSpeciesDescriptionSchema } from "./pokemonSpeciesDescriptionSchema.gen";
import { pokemonSpeciesFlavorTextSchema } from "./pokemonSpeciesFlavorTextSchema.gen";
import { z } from "@/utils/zod.ts";


export const pokemonSpeciesDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "order": z.number().int().optional().nullable(), "gender_rate": z.number().int().optional().nullable(), "capture_rate": z.number().int().optional().nullable(), "base_happiness": z.number().int().optional().nullable(), "is_baby": z.boolean().optional(), "is_legendary": z.boolean().optional(), "is_mythical": z.boolean().optional(), "hatch_counter": z.number().int().optional().nullable(), "has_gender_differences": z.boolean().optional(), "forms_switchable": z.boolean().optional(), "growth_rate": z.lazy(() => growthRateSummarySchema), "pokedex_numbers": z.array(z.lazy(() => pokemonDexEntrySchema)), "egg_groups": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "color": z.lazy(() => pokemonColorSummarySchema), "shape": z.lazy(() => pokemonShapeSummarySchema), "evolves_from_species": z.lazy(() => pokemonSpeciesSummarySchema), "evolution_chain": z.lazy(() => evolutionChainSummarySchema), "habitat": z.lazy(() => pokemonHabitatSummarySchema), "generation": z.lazy(() => generationSummarySchema), "names": z.array(z.object({ "language": z.object({ "name": z.string(), "url": z.string().url() }), "name": z.string() })), "pal_park_encounters": z.array(z.object({ "area": z.object({ "name": z.string(), "url": z.string().url() }), "base_score": z.number().int(), "rate": z.number().int() })), "form_descriptions": z.array(z.lazy(() => pokemonSpeciesDescriptionSchema)), "flavor_text_entries": z.array(z.lazy(() => pokemonSpeciesFlavorTextSchema)), "genera": z.array(z.object({ "genus": z.string(), "language": z.object({ "name": z.string(), "url": z.string().url() }) })), "varieties": z.array(z.object({ "is_default": z.boolean(), "pokemon": z.object({ "name": z.string(), "url": z.string().url() }) })) });
export type PokemonSpeciesDetailSchema = z.infer<typeof pokemonSpeciesDetailSchema>;