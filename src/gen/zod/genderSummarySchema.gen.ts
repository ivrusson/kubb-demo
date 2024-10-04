import { z } from "@/utils/zod.ts";


export const genderSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type GenderSummarySchema = z.infer<typeof genderSummarySchema>;