import { locationAreaSummarySchema } from "./locationAreaSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedLocationAreaSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => locationAreaSummarySchema)).optional() });
export type PaginatedLocationAreaSummaryListSchema = z.infer<typeof paginatedLocationAreaSummaryListSchema>;