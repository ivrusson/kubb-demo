import { berrySummarySchema } from "./berrySummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedBerrySummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => berrySummarySchema)).optional() });
export type PaginatedBerrySummaryListSchema = z.infer<typeof paginatedBerrySummaryListSchema>;