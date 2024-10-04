import { z } from "@/utils/zod.ts";
import { paginatedBerrySummaryListSchema } from "./paginatedBerrySummaryListSchema.gen";


export const berryListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type BerryListQueryParamsSchema = z.infer<typeof berryListQueryParamsSchema>;

 export const berryList200Schema = z.lazy(() => paginatedBerrySummaryListSchema);
export type BerryList200Schema = z.infer<typeof berryList200Schema>;

 export const berryListQueryResponseSchema = z.lazy(() => paginatedBerrySummaryListSchema);
export type BerryListQueryResponseSchema = z.infer<typeof berryListQueryResponseSchema>;