import { itemCategorySummarySchema } from "./itemCategorySummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedItemCategorySummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => itemCategorySummarySchema)).optional() });
export type PaginatedItemCategorySummaryListSchema = z.infer<typeof paginatedItemCategorySummaryListSchema>;