import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedVersionGroupSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => versionGroupSummarySchema)).optional() });
export type PaginatedVersionGroupSummaryListSchema = z.infer<typeof paginatedVersionGroupSummaryListSchema>;