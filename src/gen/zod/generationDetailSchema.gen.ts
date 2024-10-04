import { abilitySummarySchema } from "./abilitySummarySchema.gen";
import { regionSummarySchema } from "./regionSummarySchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { generationNameSchema } from "./generationNameSchema.gen";
import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { typeSummarySchema } from "./typeSummarySchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const generationDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "abilities": z.array(z.lazy(() => abilitySummarySchema)), "main_region": z.lazy(() => regionSummarySchema), "moves": z.array(z.lazy(() => moveSummarySchema)), "names": z.array(z.lazy(() => generationNameSchema)), "pokemon_species": z.array(z.lazy(() => pokemonSpeciesSummarySchema)), "types": z.array(z.lazy(() => typeSummarySchema)), "version_groups": z.array(z.lazy(() => versionGroupSummarySchema)) });
export type GenerationDetailSchema = z.infer<typeof generationDetailSchema>;