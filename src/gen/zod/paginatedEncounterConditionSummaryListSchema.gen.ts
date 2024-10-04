import { encounterConditionSummarySchema } from "./encounterConditionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEncounterConditionSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => encounterConditionSummarySchema)).optional() });
export type PaginatedEncounterConditionSummaryListSchema = z.infer<typeof paginatedEncounterConditionSummaryListSchema>;