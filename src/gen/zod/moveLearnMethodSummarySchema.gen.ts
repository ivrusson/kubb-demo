import { z } from "@/utils/zod.ts";


export const moveLearnMethodSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveLearnMethodSummarySchema = z.infer<typeof moveLearnMethodSummarySchema>;