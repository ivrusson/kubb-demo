import { z } from "@/utils/zod.ts";
import { itemPocketDetailSchema } from "./itemPocketDetailSchema.gen";


export const itemPocketRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ItemPocketRetrievePathParamsSchema = z.infer<typeof itemPocketRetrievePathParamsSchema>;

 export const itemPocketRetrieve200Schema = z.lazy(() => itemPocketDetailSchema);
export type ItemPocketRetrieve200Schema = z.infer<typeof itemPocketRetrieve200Schema>;

 export const itemPocketRetrieveQueryResponseSchema = z.lazy(() => itemPocketDetailSchema);
export type ItemPocketRetrieveQueryResponseSchema = z.infer<typeof itemPocketRetrieveQueryResponseSchema>;