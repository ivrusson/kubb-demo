import { z } from "@/utils/zod.ts";


export const superContestEffectSummarySchema = z.object({ "url": z.string().url() });
export type SuperContestEffectSummarySchema = z.infer<typeof superContestEffectSummarySchema>;