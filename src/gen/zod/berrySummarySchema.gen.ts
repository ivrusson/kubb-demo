import { z } from "@/utils/zod.ts";


export const berrySummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type BerrySummarySchema = z.infer<typeof berrySummarySchema>;