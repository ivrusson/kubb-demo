import { z } from "@/utils/zod.ts";


export const itemSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ItemSummarySchema = z.infer<typeof itemSummarySchema>;