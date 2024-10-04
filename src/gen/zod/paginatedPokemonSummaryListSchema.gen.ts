import { pokemonSummarySchema } from "./pokemonSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokemonSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokemonSummarySchema)).optional() });
export type PaginatedPokemonSummaryListSchema = z.infer<typeof paginatedPokemonSummaryListSchema>;