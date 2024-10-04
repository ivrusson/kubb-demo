import { evolutionChainSummarySchema } from "./evolutionChainSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedEvolutionChainSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => evolutionChainSummarySchema)).optional() });
export type PaginatedEvolutionChainSummaryListSchema = z.infer<typeof paginatedEvolutionChainSummaryListSchema>;