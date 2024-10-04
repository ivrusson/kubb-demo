import { z } from "@/utils/zod.ts";


export const languageSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type LanguageSummarySchema = z.infer<typeof languageSummarySchema>;