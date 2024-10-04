import { z } from "@/utils/zod.ts";


export const itemFlingEffectSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ItemFlingEffectSummarySchema = z.infer<typeof itemFlingEffectSummarySchema>;