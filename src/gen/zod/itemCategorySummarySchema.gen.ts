import { z } from "@/utils/zod.ts";


export const itemCategorySummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ItemCategorySummarySchema = z.infer<typeof itemCategorySummarySchema>;