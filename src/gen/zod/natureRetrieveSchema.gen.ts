import { z } from "@/utils/zod.ts";
import { natureDetailSchema } from "./natureDetailSchema.gen";


export const natureRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type NatureRetrievePathParamsSchema = z.infer<typeof natureRetrievePathParamsSchema>;

 export const natureRetrieve200Schema = z.lazy(() => natureDetailSchema);
export type NatureRetrieve200Schema = z.infer<typeof natureRetrieve200Schema>;

 export const natureRetrieveQueryResponseSchema = z.lazy(() => natureDetailSchema);
export type NatureRetrieveQueryResponseSchema = z.infer<typeof natureRetrieveQueryResponseSchema>;