import { itemSummarySchema } from "./itemSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedItemSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => itemSummarySchema)).optional() });
export type PaginatedItemSummaryListSchema = z.infer<typeof paginatedItemSummaryListSchema>;