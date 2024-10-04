import { z } from "@/utils/zod.ts";


export const moveDamageClassSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveDamageClassSummarySchema = z.infer<typeof moveDamageClassSummarySchema>;