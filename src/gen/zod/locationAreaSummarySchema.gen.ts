import { z } from "@/utils/zod.ts";


export const locationAreaSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type LocationAreaSummarySchema = z.infer<typeof locationAreaSummarySchema>;