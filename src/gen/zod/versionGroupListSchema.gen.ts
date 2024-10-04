import { z } from "@/utils/zod.ts";
import { paginatedVersionGroupSummaryListSchema } from "./paginatedVersionGroupSummaryListSchema.gen";


export const versionGroupListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type VersionGroupListQueryParamsSchema = z.infer<typeof versionGroupListQueryParamsSchema>;

 export const versionGroupList200Schema = z.lazy(() => paginatedVersionGroupSummaryListSchema);
export type VersionGroupList200Schema = z.infer<typeof versionGroupList200Schema>;

 export const versionGroupListQueryResponseSchema = z.lazy(() => paginatedVersionGroupSummaryListSchema);
export type VersionGroupListQueryResponseSchema = z.infer<typeof versionGroupListQueryResponseSchema>;