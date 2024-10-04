import { z } from "@/utils/zod.ts";
import { paginatedEggGroupSummaryListSchema } from "./paginatedEggGroupSummaryListSchema.gen";


export const eggGroupListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type EggGroupListQueryParamsSchema = z.infer<typeof eggGroupListQueryParamsSchema>;

 export const eggGroupList200Schema = z.lazy(() => paginatedEggGroupSummaryListSchema);
export type EggGroupList200Schema = z.infer<typeof eggGroupList200Schema>;

 export const eggGroupListQueryResponseSchema = z.lazy(() => paginatedEggGroupSummaryListSchema);
export type EggGroupListQueryResponseSchema = z.infer<typeof eggGroupListQueryResponseSchema>;