import { z } from "@/utils/zod.ts";


export const moveTargetSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveTargetSummarySchema = z.infer<typeof moveTargetSummarySchema>;