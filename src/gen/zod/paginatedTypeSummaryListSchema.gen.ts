import { typeSummarySchema } from "./typeSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedTypeSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => typeSummarySchema)).optional() });
export type PaginatedTypeSummaryListSchema = z.infer<typeof paginatedTypeSummaryListSchema>;