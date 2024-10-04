import { berryFlavorSummarySchema } from "./berryFlavorSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedBerryFlavorSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => berryFlavorSummarySchema)).optional() });
export type PaginatedBerryFlavorSummaryListSchema = z.infer<typeof paginatedBerryFlavorSummaryListSchema>;