import { z } from "@/utils/zod.ts";


export const generationSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type GenerationSummarySchema = z.infer<typeof generationSummarySchema>;