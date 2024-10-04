import { contestTypeSummarySchema } from "./contestTypeSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedContestTypeSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => contestTypeSummarySchema)).optional() });
export type PaginatedContestTypeSummaryListSchema = z.infer<typeof paginatedContestTypeSummaryListSchema>;