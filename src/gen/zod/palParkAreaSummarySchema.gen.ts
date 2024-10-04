import { z } from "@/utils/zod.ts";


export const palParkAreaSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PalParkAreaSummarySchema = z.infer<typeof palParkAreaSummarySchema>;