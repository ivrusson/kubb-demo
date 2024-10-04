import { z } from "@/utils/zod.ts";


export const abilitySummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type AbilitySummarySchema = z.infer<typeof abilitySummarySchema>;