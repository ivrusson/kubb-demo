import { z } from "@/utils/zod.ts";
import { locationAreaDetailSchema } from "./locationAreaDetailSchema.gen";


export const locationAreaRetrievePathParamsSchema = z.object({ "id": z.number().int().describe("A unique integer value identifying this location area.") });
export type LocationAreaRetrievePathParamsSchema = z.infer<typeof locationAreaRetrievePathParamsSchema>;

 export const locationAreaRetrieve200Schema = z.lazy(() => locationAreaDetailSchema);
export type LocationAreaRetrieve200Schema = z.infer<typeof locationAreaRetrieve200Schema>;

 export const locationAreaRetrieveQueryResponseSchema = z.lazy(() => locationAreaDetailSchema);
export type LocationAreaRetrieveQueryResponseSchema = z.infer<typeof locationAreaRetrieveQueryResponseSchema>;