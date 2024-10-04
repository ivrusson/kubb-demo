import { moveTargetSummarySchema } from "./moveTargetSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveTargetSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveTargetSummarySchema)).optional() });
export type PaginatedMoveTargetSummaryListSchema = z.infer<typeof paginatedMoveTargetSummaryListSchema>;