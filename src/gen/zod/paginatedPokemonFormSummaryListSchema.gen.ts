import { pokemonFormSummarySchema } from "./pokemonFormSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokemonFormSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokemonFormSummarySchema)).optional() });
export type PaginatedPokemonFormSummaryListSchema = z.infer<typeof paginatedPokemonFormSummaryListSchema>;