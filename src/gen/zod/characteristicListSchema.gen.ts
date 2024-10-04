import { z } from "@/utils/zod.ts";
import { paginatedCharacteristicSummaryListSchema } from "./paginatedCharacteristicSummaryListSchema.gen";


export const characteristicListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type CharacteristicListQueryParamsSchema = z.infer<typeof characteristicListQueryParamsSchema>;

 export const characteristicList200Schema = z.lazy(() => paginatedCharacteristicSummaryListSchema);
export type CharacteristicList200Schema = z.infer<typeof characteristicList200Schema>;

 export const characteristicListQueryResponseSchema = z.lazy(() => paginatedCharacteristicSummaryListSchema);
export type CharacteristicListQueryResponseSchema = z.infer<typeof characteristicListQueryResponseSchema>;