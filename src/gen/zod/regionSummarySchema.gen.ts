import { z } from "@/utils/zod.ts";


export const regionSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type RegionSummarySchema = z.infer<typeof regionSummarySchema>;