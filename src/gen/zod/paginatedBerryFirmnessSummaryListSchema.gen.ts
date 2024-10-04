import { berryFirmnessSummarySchema } from "./berryFirmnessSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedBerryFirmnessSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => berryFirmnessSummarySchema)).optional() });
export type PaginatedBerryFirmnessSummaryListSchema = z.infer<typeof paginatedBerryFirmnessSummaryListSchema>;