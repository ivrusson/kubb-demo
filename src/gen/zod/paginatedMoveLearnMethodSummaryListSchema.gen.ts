import { moveLearnMethodSummarySchema } from "./moveLearnMethodSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveLearnMethodSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveLearnMethodSummarySchema)).optional() });
export type PaginatedMoveLearnMethodSummaryListSchema = z.infer<typeof paginatedMoveLearnMethodSummaryListSchema>;