import { growthRateDescriptionSchema } from "./growthRateDescriptionSchema.gen";
import { experienceSchema } from "./experienceSchema.gen";
import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const growthRateDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "formula": z.string().max(500), "descriptions": z.array(z.lazy(() => growthRateDescriptionSchema)), "levels": z.array(z.lazy(() => experienceSchema)), "pokemon_species": z.array(z.lazy(() => pokemonSpeciesSummarySchema)) });
export type GrowthRateDetailSchema = z.infer<typeof growthRateDetailSchema>;