import { z } from "@/utils/zod.ts";
import { statDetailSchema } from "./statDetailSchema.gen";


export const statRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type StatRetrievePathParamsSchema = z.infer<typeof statRetrievePathParamsSchema>;

 export const statRetrieve200Schema = z.lazy(() => statDetailSchema);
export type StatRetrieve200Schema = z.infer<typeof statRetrieve200Schema>;

 export const statRetrieveQueryResponseSchema = z.lazy(() => statDetailSchema);
export type StatRetrieveQueryResponseSchema = z.infer<typeof statRetrieveQueryResponseSchema>;