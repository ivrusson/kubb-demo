import { itemPocketSummarySchema } from "./itemPocketSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedItemPocketSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => itemPocketSummarySchema)).optional() });
export type PaginatedItemPocketSummaryListSchema = z.infer<typeof paginatedItemPocketSummaryListSchema>;