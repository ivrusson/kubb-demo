import { z } from "@/utils/zod.ts";
import { locationDetailSchema } from "./locationDetailSchema.gen";


export const locationRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type LocationRetrievePathParamsSchema = z.infer<typeof locationRetrievePathParamsSchema>;

 export const locationRetrieve200Schema = z.lazy(() => locationDetailSchema);
export type LocationRetrieve200Schema = z.infer<typeof locationRetrieve200Schema>;

 export const locationRetrieveQueryResponseSchema = z.lazy(() => locationDetailSchema);
export type LocationRetrieveQueryResponseSchema = z.infer<typeof locationRetrieveQueryResponseSchema>;