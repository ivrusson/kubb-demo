import { z } from "@/utils/zod.ts";


export const versionGroupSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type VersionGroupSummarySchema = z.infer<typeof versionGroupSummarySchema>;