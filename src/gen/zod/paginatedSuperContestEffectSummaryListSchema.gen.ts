import { superContestEffectSummarySchema } from "./superContestEffectSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedSuperContestEffectSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => superContestEffectSummarySchema)).optional() });
export type PaginatedSuperContestEffectSummaryListSchema = z.infer<typeof paginatedSuperContestEffectSummaryListSchema>;