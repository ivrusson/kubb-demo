import { moveBattleStyleSummarySchema } from "./moveBattleStyleSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveBattleStyleSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveBattleStyleSummarySchema)).optional() });
export type PaginatedMoveBattleStyleSummaryListSchema = z.infer<typeof paginatedMoveBattleStyleSummaryListSchema>;