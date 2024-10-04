import { eggGroupSummarySchema } from "./eggGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEggGroupSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => eggGroupSummarySchema)).optional() });
export type PaginatedEggGroupSummaryListSchema = z.infer<typeof paginatedEggGroupSummaryListSchema>;