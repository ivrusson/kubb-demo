import { z } from "@/utils/zod.ts";


export const contestTypeSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ContestTypeSummarySchema = z.infer<typeof contestTypeSummarySchema>;