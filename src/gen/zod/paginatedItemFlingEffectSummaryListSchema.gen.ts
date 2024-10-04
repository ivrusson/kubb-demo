import { itemFlingEffectSummarySchema } from "./itemFlingEffectSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedItemFlingEffectSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => itemFlingEffectSummarySchema)).optional() });
export type PaginatedItemFlingEffectSummaryListSchema = z.infer<typeof paginatedItemFlingEffectSummaryListSchema>;