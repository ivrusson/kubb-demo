import { pokedexSummarySchema } from "./pokedexSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokedexSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokedexSummarySchema)).optional() });
export type PaginatedPokedexSummaryListSchema = z.infer<typeof paginatedPokedexSummaryListSchema>;