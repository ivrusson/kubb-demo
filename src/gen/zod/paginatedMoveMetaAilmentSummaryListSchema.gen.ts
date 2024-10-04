import { moveMetaAilmentSummarySchema } from "./moveMetaAilmentSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveMetaAilmentSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveMetaAilmentSummarySchema)).optional() });
export type PaginatedMoveMetaAilmentSummaryListSchema = z.infer<typeof paginatedMoveMetaAilmentSummaryListSchema>;