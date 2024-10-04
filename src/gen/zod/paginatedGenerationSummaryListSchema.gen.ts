import { generationSummarySchema } from "./generationSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedGenerationSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => generationSummarySchema)).optional() });
export type PaginatedGenerationSummaryListSchema = z.infer<typeof paginatedGenerationSummaryListSchema>;