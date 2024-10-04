import { encounterMethodSummarySchema } from "./encounterMethodSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEncounterMethodSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => encounterMethodSummarySchema)).optional() });
export type PaginatedEncounterMethodSummaryListSchema = z.infer<typeof paginatedEncounterMethodSummaryListSchema>;