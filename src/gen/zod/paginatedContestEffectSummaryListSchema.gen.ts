import { contestEffectSummarySchema } from "./contestEffectSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedContestEffectSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => contestEffectSummarySchema)).optional() });
export type PaginatedContestEffectSummaryListSchema = z.infer<typeof paginatedContestEffectSummaryListSchema>;