import { z } from "@/utils/zod.ts";
import { moveDamageClassDetailSchema } from "./moveDamageClassDetailSchema.gen";


export const moveDamageClassRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveDamageClassRetrievePathParamsSchema = z.infer<typeof moveDamageClassRetrievePathParamsSchema>;

 export const moveDamageClassRetrieve200Schema = z.lazy(() => moveDamageClassDetailSchema);
export type MoveDamageClassRetrieve200Schema = z.infer<typeof moveDamageClassRetrieve200Schema>;

 export const moveDamageClassRetrieveQueryResponseSchema = z.lazy(() => moveDamageClassDetailSchema);
export type MoveDamageClassRetrieveQueryResponseSchema = z.infer<typeof moveDamageClassRetrieveQueryResponseSchema>;