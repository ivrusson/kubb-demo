import { z } from "@/utils/zod.ts";
import { paginatedPokeathlonStatSummaryListSchema } from "./paginatedPokeathlonStatSummaryListSchema.gen";


export const pokeathlonStatListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type PokeathlonStatListQueryParamsSchema = z.infer<typeof pokeathlonStatListQueryParamsSchema>;

 export const pokeathlonStatList200Schema = z.lazy(() => paginatedPokeathlonStatSummaryListSchema);
export type PokeathlonStatList200Schema = z.infer<typeof pokeathlonStatList200Schema>;

 export const pokeathlonStatListQueryResponseSchema = z.lazy(() => paginatedPokeathlonStatSummaryListSchema);
export type PokeathlonStatListQueryResponseSchema = z.infer<typeof pokeathlonStatListQueryResponseSchema>;