import { z } from "@/utils/zod.ts";


export const encounterMethodSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type EncounterMethodSummarySchema = z.infer<typeof encounterMethodSummarySchema>;