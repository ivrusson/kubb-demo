import { moveSummarySchema } from "./moveSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveSummarySchema)).optional() });
export type PaginatedMoveSummaryListSchema = z.infer<typeof paginatedMoveSummaryListSchema>;