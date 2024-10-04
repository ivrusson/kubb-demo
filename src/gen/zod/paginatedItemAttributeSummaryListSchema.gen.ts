import { itemAttributeSummarySchema } from "./itemAttributeSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedItemAttributeSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => itemAttributeSummarySchema)).optional() });
export type PaginatedItemAttributeSummaryListSchema = z.infer<typeof paginatedItemAttributeSummaryListSchema>;