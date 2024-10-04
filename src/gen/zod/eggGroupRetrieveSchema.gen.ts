import { z } from "@/utils/zod.ts";
import { eggGroupDetailSchema } from "./eggGroupDetailSchema.gen";


export const eggGroupRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EggGroupRetrievePathParamsSchema = z.infer<typeof eggGroupRetrievePathParamsSchema>;

 export const eggGroupRetrieve200Schema = z.lazy(() => eggGroupDetailSchema);
export type EggGroupRetrieve200Schema = z.infer<typeof eggGroupRetrieve200Schema>;

 export const eggGroupRetrieveQueryResponseSchema = z.lazy(() => eggGroupDetailSchema);
export type EggGroupRetrieveQueryResponseSchema = z.infer<typeof eggGroupRetrieveQueryResponseSchema>;