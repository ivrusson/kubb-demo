import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedLanguageSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => languageSummarySchema)).optional() });
export type PaginatedLanguageSummaryListSchema = z.infer<typeof paginatedLanguageSummaryListSchema>;