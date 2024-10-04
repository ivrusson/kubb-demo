import { characteristicSummarySchema } from "./characteristicSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedCharacteristicSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => characteristicSummarySchema)).optional() });
export type PaginatedCharacteristicSummaryListSchema = z.infer<typeof paginatedCharacteristicSummaryListSchema>;