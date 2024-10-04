import { moveMetaCategorySummarySchema } from "./moveMetaCategorySummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMoveMetaCategorySummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => moveMetaCategorySummarySchema)).optional() });
export type PaginatedMoveMetaCategorySummaryListSchema = z.infer<typeof paginatedMoveMetaCategorySummaryListSchema>;