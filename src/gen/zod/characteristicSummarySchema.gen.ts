import { z } from "@/utils/zod.ts";


export const characteristicSummarySchema = z.object({ "url": z.string().url() });
export type CharacteristicSummarySchema = z.infer<typeof characteristicSummarySchema>;