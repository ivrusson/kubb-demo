import { z } from "@/utils/zod.ts";


export const itemAttributeSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type ItemAttributeSummarySchema = z.infer<typeof itemAttributeSummarySchema>;