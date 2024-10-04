import { z } from "@/utils/zod.ts";


export const growthRateSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type GrowthRateSummarySchema = z.infer<typeof growthRateSummarySchema>;