import { z } from "@/utils/zod.ts";
import { itemDetailSchema } from "./itemDetailSchema.gen";


export const itemRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ItemRetrievePathParamsSchema = z.infer<typeof itemRetrievePathParamsSchema>;

 export const itemRetrieve200Schema = z.lazy(() => itemDetailSchema);
export type ItemRetrieve200Schema = z.infer<typeof itemRetrieve200Schema>;

 export const itemRetrieveQueryResponseSchema = z.lazy(() => itemDetailSchema);
export type ItemRetrieveQueryResponseSchema = z.infer<typeof itemRetrieveQueryResponseSchema>;