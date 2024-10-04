import { pokemonSpeciesSummarySchema } from "./pokemonSpeciesSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokemonSpeciesSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokemonSpeciesSummarySchema)).optional() });
export type PaginatedPokemonSpeciesSummaryListSchema = z.infer<typeof paginatedPokemonSpeciesSummaryListSchema>;