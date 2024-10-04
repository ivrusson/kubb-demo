import { z } from "@/utils/zod.ts";
import { itemCategoryDetailSchema } from "./itemCategoryDetailSchema.gen";


export const itemCategoryRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ItemCategoryRetrievePathParamsSchema = z.infer<typeof itemCategoryRetrievePathParamsSchema>;

 export const itemCategoryRetrieve200Schema = z.lazy(() => itemCategoryDetailSchema);
export type ItemCategoryRetrieve200Schema = z.infer<typeof itemCategoryRetrieve200Schema>;

 export const itemCategoryRetrieveQueryResponseSchema = z.lazy(() => itemCategoryDetailSchema);
export type ItemCategoryRetrieveQueryResponseSchema = z.infer<typeof itemCategoryRetrieveQueryResponseSchema>;