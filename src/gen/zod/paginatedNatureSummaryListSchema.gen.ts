import { natureSummarySchema } from "./natureSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedNatureSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => natureSummarySchema)).optional() });
export type PaginatedNatureSummaryListSchema = z.infer<typeof paginatedNatureSummaryListSchema>;