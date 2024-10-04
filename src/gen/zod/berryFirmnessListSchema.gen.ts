import { z } from "@/utils/zod.ts";
import { paginatedBerryFirmnessSummaryListSchema } from "./paginatedBerryFirmnessSummaryListSchema.gen";


export const berryFirmnessListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type BerryFirmnessListQueryParamsSchema = z.infer<typeof berryFirmnessListQueryParamsSchema>;

 export const berryFirmnessList200Schema = z.lazy(() => paginatedBerryFirmnessSummaryListSchema);
export type BerryFirmnessList200Schema = z.infer<typeof berryFirmnessList200Schema>;

 export const berryFirmnessListQueryResponseSchema = z.lazy(() => paginatedBerryFirmnessSummaryListSchema);
export type BerryFirmnessListQueryResponseSchema = z.infer<typeof berryFirmnessListQueryResponseSchema>;