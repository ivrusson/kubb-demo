import { locationSummarySchema } from "./locationSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedLocationSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => locationSummarySchema)).optional() });
export type PaginatedLocationSummaryListSchema = z.infer<typeof paginatedLocationSummaryListSchema>;