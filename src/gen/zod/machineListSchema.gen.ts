import { z } from "@/utils/zod.ts";
import { paginatedMachineSummaryListSchema } from "./paginatedMachineSummaryListSchema.gen";


export const machineListQueryParamsSchema = z.object({ "limit": z.number().int().describe("Number of results to return per page.").optional(), "offset": z.number().int().describe("The initial index from which to return the results.").optional(), "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ").optional() }).optional();
export type MachineListQueryParamsSchema = z.infer<typeof machineListQueryParamsSchema>;

 export const machineList200Schema = z.lazy(() => paginatedMachineSummaryListSchema);
export type MachineList200Schema = z.infer<typeof machineList200Schema>;

 export const machineListQueryResponseSchema = z.lazy(() => paginatedMachineSummaryListSchema);
export type MachineListQueryResponseSchema = z.infer<typeof machineListQueryResponseSchema>;