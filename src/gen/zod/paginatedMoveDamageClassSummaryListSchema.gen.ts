import { moveDamageClassSummarySchema } from "./moveDamageClassSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveDamageClassSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveDamageClassSummarySchema)).optional() });
export type PaginatedMoveDamageClassSummaryListSchema = z.infer<typeof paginatedMoveDamageClassSummaryListSchema>;