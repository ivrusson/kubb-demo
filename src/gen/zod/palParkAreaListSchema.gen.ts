import { z } from "@/utils/zod.ts";
import { paginatedPalParkAreaSummaryListSchema } from "./paginatedPalParkAreaSummaryListSchema.gen";


export const palParkAreaListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PalParkAreaListQueryParamsSchema = z.infer<typeof palParkAreaListQueryParamsSchema>;

 export const palParkAreaList200Schema = z.lazy(() => paginatedPalParkAreaSummaryListSchema);
export type PalParkAreaList200Schema = z.infer<typeof palParkAreaList200Schema>;

 export const palParkAreaListQueryResponseSchema = z.lazy(() => paginatedPalParkAreaSummaryListSchema);
export type PalParkAreaListQueryResponseSchema = z.infer<typeof palParkAreaListQueryResponseSchema>;