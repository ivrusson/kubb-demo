import { z } from "@/utils/zod.ts";


export const evolutionTriggerSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type EvolutionTriggerSummarySchema = z.infer<typeof evolutionTriggerSummarySchema>;