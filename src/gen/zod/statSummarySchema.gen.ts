import { z } from "@/utils/zod.ts";


export const statSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type StatSummarySchema = z.infer<typeof statSummarySchema>;