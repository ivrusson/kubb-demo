import { z } from "@/utils/zod.ts";


export const eggGroupSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type EggGroupSummarySchema = z.infer<typeof eggGroupSummarySchema>;