import { z } from "@/utils/zod.ts";
import { itemAttributeDetailSchema } from "./itemAttributeDetailSchema.gen";


export const itemAttributeRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ItemAttributeRetrievePathParamsSchema = z.infer<typeof itemAttributeRetrievePathParamsSchema>;

 export const itemAttributeRetrieve200Schema = z.lazy(() => itemAttributeDetailSchema);
export type ItemAttributeRetrieve200Schema = z.infer<typeof itemAttributeRetrieve200Schema>;

 export const itemAttributeRetrieveQueryResponseSchema = z.lazy(() => itemAttributeDetailSchema);
export type ItemAttributeRetrieveQueryResponseSchema = z.infer<typeof itemAttributeRetrieveQueryResponseSchema>;