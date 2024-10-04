import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const evolutionTriggerNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type EvolutionTriggerNameSchema = z.infer<typeof evolutionTriggerNameSchema>;