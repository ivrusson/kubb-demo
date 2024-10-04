import { z } from "@/utils/zod.ts";


export const moveMetaCategorySummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveMetaCategorySummarySchema = z.infer<typeof moveMetaCategorySummarySchema>;