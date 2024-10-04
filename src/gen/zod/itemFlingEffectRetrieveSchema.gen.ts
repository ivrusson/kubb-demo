import { z } from "@/utils/zod.ts";
import { itemFlingEffectDetailSchema } from "./itemFlingEffectDetailSchema.gen";


export const itemFlingEffectRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ItemFlingEffectRetrievePathParamsSchema = z.infer<typeof itemFlingEffectRetrievePathParamsSchema>;

 export const itemFlingEffectRetrieve200Schema = z.lazy(() => itemFlingEffectDetailSchema);
export type ItemFlingEffectRetrieve200Schema = z.infer<typeof itemFlingEffectRetrieve200Schema>;

 export const itemFlingEffectRetrieveQueryResponseSchema = z.lazy(() => itemFlingEffectDetailSchema);
export type ItemFlingEffectRetrieveQueryResponseSchema = z.infer<typeof itemFlingEffectRetrieveQueryResponseSchema>;