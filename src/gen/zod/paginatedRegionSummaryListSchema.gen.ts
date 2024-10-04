import { regionSummarySchema } from "./regionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedRegionSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => regionSummarySchema)).optional() });
export type PaginatedRegionSummaryListSchema = z.infer<typeof paginatedRegionSummaryListSchema>;