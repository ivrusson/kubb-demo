import { z } from "@/utils/zod.ts";


export const moveSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveSummarySchema = z.infer<typeof moveSummarySchema>;