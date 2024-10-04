import { z } from "@/utils/zod.ts";
import { regionDetailSchema } from "./regionDetailSchema.gen";


export const regionRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type RegionRetrievePathParamsSchema = z.infer<typeof regionRetrievePathParamsSchema>;

 export const regionRetrieve200Schema = z.lazy(() => regionDetailSchema);
export type RegionRetrieve200Schema = z.infer<typeof regionRetrieve200Schema>;

 export const regionRetrieveQueryResponseSchema = z.lazy(() => regionDetailSchema);
export type RegionRetrieveQueryResponseSchema = z.infer<typeof regionRetrieveQueryResponseSchema>;