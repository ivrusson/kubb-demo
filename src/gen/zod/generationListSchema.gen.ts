import { z } from "@/utils/zod.ts";
import { paginatedGenerationSummaryListSchema } from "./paginatedGenerationSummaryListSchema.gen";


export const generationListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type GenerationListQueryParamsSchema = z.infer<typeof generationListQueryParamsSchema>;

 export const generationList200Schema = z.lazy(() => paginatedGenerationSummaryListSchema);
export type GenerationList200Schema = z.infer<typeof generationList200Schema>;

 export const generationListQueryResponseSchema = z.lazy(() => paginatedGenerationSummaryListSchema);
export type GenerationListQueryResponseSchema = z.infer<typeof generationListQueryResponseSchema>;