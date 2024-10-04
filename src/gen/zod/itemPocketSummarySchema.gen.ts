import { z } from "@/utils/zod.ts";


export const itemPocketSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ItemPocketSummarySchema = z.infer<typeof itemPocketSummarySchema>;