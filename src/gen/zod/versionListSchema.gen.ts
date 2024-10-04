import { z } from "@/utils/zod.ts";
import { paginatedVersionSummaryListSchema } from "./paginatedVersionSummaryListSchema.gen";


export const versionListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type VersionListQueryParamsSchema = z.infer<typeof versionListQueryParamsSchema>;

 export const versionList200Schema = z.lazy(() => paginatedVersionSummaryListSchema);
export type VersionList200Schema = z.infer<typeof versionList200Schema>;

 export const versionListQueryResponseSchema = z.lazy(() => paginatedVersionSummaryListSchema);
export type VersionListQueryResponseSchema = z.infer<typeof versionListQueryResponseSchema>;