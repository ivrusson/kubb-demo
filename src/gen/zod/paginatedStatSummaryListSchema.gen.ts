import { statSummarySchema } from "./statSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedStatSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => statSummarySchema)).optional() });
export type PaginatedStatSummaryListSchema = z.infer<typeof paginatedStatSummaryListSchema>;