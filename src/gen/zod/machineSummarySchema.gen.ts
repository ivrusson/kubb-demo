import { z } from "@/utils/zod.ts";


export const machineSummarySchema = z.object({ "url": z.string().url() });
export type MachineSummarySchema = z.infer<typeof machineSummarySchema>;