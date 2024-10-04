import { z } from "@/utils/zod.ts";


export const natureSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type NatureSummarySchema = z.infer<typeof natureSummarySchema>;