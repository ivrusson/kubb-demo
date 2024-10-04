import { z } from "@/utils/zod.ts";


export const locationSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type LocationSummarySchema = z.infer<typeof locationSummarySchema>;