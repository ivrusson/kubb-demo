import { z } from "@/utils/zod.ts";


export const typeSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type TypeSummarySchema = z.infer<typeof typeSummarySchema>;