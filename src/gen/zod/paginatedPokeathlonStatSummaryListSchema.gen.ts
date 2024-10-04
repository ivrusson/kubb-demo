import { pokeathlonStatSummarySchema } from "./pokeathlonStatSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokeathlonStatSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokeathlonStatSummarySchema)).optional() });
export type PaginatedPokeathlonStatSummaryListSchema = z.infer<typeof paginatedPokeathlonStatSummaryListSchema>;