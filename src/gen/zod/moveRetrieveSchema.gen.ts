import { z } from "@/utils/zod.ts";
import { moveDetailSchema } from "./moveDetailSchema.gen";


export const moveRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveRetrievePathParamsSchema = z.infer<typeof moveRetrievePathParamsSchema>;

 export const moveRetrieve200Schema = z.lazy(() => moveDetailSchema);
export type MoveRetrieve200Schema = z.infer<typeof moveRetrieve200Schema>;

 export const moveRetrieveQueryResponseSchema = z.lazy(() => moveDetailSchema);
export type MoveRetrieveQueryResponseSchema = z.infer<typeof moveRetrieveQueryResponseSchema>;