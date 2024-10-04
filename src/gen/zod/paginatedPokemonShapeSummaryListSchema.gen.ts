import { pokemonShapeSummarySchema } from "./pokemonShapeSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedPokemonShapeSummaryListSchema = z.object({ "count": z.number().int().optional(), "next": z.string().url().nullable().nullish(), "previous": z.string().url().nullable().nullish(), "results": z.array(z.lazy(() => pokemonShapeSummarySchema)).optional() });
export type PaginatedPokemonShapeSummaryListSchema = z.infer<typeof paginatedPokemonShapeSummaryListSchema>;