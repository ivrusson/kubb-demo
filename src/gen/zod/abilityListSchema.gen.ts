import { z } from "@/utils/zod.ts";
import { paginatedAbilitySummaryListSchema } from "./paginatedAbilitySummaryListSchema.gen";


export const abilityListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type AbilityListQueryParamsSchema = z.infer<typeof abilityListQueryParamsSchema>;

 export const abilityList200Schema = z.lazy(() => paginatedAbilitySummaryListSchema);
export type AbilityList200Schema = z.infer<typeof abilityList200Schema>;

 export const abilityListQueryResponseSchema = z.lazy(() => paginatedAbilitySummaryListSchema);
export type AbilityListQueryResponseSchema = z.infer<typeof abilityListQueryResponseSchema>;