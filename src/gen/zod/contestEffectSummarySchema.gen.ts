import { z } from "@/utils/zod.ts";


export const contestEffectSummarySchema = z.object({ "url": z.string().url() });
export type ContestEffectSummarySchema = z.infer<typeof contestEffectSummarySchema>;