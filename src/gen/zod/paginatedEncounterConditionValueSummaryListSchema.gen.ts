import { encounterConditionValueSummarySchema } from "./encounterConditionValueSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEncounterConditionValueSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => encounterConditionValueSummarySchema)).optional() });
export type PaginatedEncounterConditionValueSummaryListSchema = z.infer<typeof paginatedEncounterConditionValueSummaryListSchema>;