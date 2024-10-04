import { z } from "@/utils/zod.ts";


export const encounterConditionSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type EncounterConditionSummarySchema = z.infer<typeof encounterConditionSummarySchema>;