import { z } from "@/utils/zod.ts";
import { typeDetailSchema } from "./typeDetailSchema.gen";


export const typeRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type TypeRetrievePathParamsSchema = z.infer<typeof typeRetrievePathParamsSchema>;

 export const typeRetrieve200Schema = z.lazy(() => typeDetailSchema);
export type TypeRetrieve200Schema = z.infer<typeof typeRetrieve200Schema>;

 export const typeRetrieveQueryResponseSchema = z.lazy(() => typeDetailSchema);
export type TypeRetrieveQueryResponseSchema = z.infer<typeof typeRetrieveQueryResponseSchema>;