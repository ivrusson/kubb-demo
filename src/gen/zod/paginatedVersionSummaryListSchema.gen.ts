import { versionSummarySchema } from "./versionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedVersionSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => versionSummarySchema)).optional() });
export type PaginatedVersionSummaryListSchema = z.infer<typeof paginatedVersionSummaryListSchema>;