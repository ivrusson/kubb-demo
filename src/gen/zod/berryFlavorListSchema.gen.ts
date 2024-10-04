import { z } from "@/utils/zod.ts";
import { paginatedBerryFlavorSummaryListSchema } from "./paginatedBerryFlavorSummaryListSchema.gen";


export const berryFlavorListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type BerryFlavorListQueryParamsSchema = z.infer<typeof berryFlavorListQueryParamsSchema>;

 export const berryFlavorList200Schema = z.lazy(() => paginatedBerryFlavorSummaryListSchema);
export type BerryFlavorList200Schema = z.infer<typeof berryFlavorList200Schema>;

 export const berryFlavorListQueryResponseSchema = z.lazy(() => paginatedBerryFlavorSummaryListSchema);
export type BerryFlavorListQueryResponseSchema = z.infer<typeof berryFlavorListQueryResponseSchema>;