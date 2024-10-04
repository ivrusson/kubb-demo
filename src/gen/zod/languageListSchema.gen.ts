import { z } from "@/utils/zod.ts";
import { paginatedLanguageSummaryListSchema } from "./paginatedLanguageSummaryListSchema.gen";


export const languageListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type LanguageListQueryParamsSchema = z.infer<typeof languageListQueryParamsSchema>;

 export const languageList200Schema = z.lazy(() => paginatedLanguageSummaryListSchema);
export type LanguageList200Schema = z.infer<typeof languageList200Schema>;

 export const languageListQueryResponseSchema = z.lazy(() => paginatedLanguageSummaryListSchema);
export type LanguageListQueryResponseSchema = z.infer<typeof languageListQueryResponseSchema>;