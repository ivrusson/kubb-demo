import { palParkAreaSummarySchema } from "./palParkAreaSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPalParkAreaSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => palParkAreaSummarySchema)).optional() });
export type PaginatedPalParkAreaSummaryListSchema = z.infer<typeof paginatedPalParkAreaSummaryListSchema>;