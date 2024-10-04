import { machineSummarySchema } from "./machineSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedMachineSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => machineSummarySchema)).optional() });
export type PaginatedMachineSummaryListSchema = z.infer<typeof paginatedMachineSummaryListSchema>;