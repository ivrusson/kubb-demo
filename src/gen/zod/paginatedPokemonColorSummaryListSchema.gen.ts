import { pokemonColorSummarySchema } from "./pokemonColorSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokemonColorSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokemonColorSummarySchema)).optional() });
export type PaginatedPokemonColorSummaryListSchema = z.infer<typeof paginatedPokemonColorSummaryListSchema>;