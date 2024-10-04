import { z } from "@/utils/zod.ts";


export const versionSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type VersionSummarySchema = z.infer<typeof versionSummarySchema>;