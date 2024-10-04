import { abilitySummarySchema } from "./abilitySummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedAbilitySummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => abilitySummarySchema)).optional() });
export type PaginatedAbilitySummaryListSchema = z.infer<typeof paginatedAbilitySummaryListSchema>;