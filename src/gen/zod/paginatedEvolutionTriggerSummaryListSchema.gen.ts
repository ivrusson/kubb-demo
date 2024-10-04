import { evolutionTriggerSummarySchema } from "./evolutionTriggerSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEvolutionTriggerSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => evolutionTriggerSummarySchema)).optional() });
export type PaginatedEvolutionTriggerSummaryListSchema = z.infer<typeof paginatedEvolutionTriggerSummaryListSchema>;