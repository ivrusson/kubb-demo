import { z } from "@/utils/zod.ts";
import { moveLearnMethodDetailSchema } from "./moveLearnMethodDetailSchema.gen";


export const moveLearnMethodRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveLearnMethodRetrievePathParamsSchema = z.infer<typeof moveLearnMethodRetrievePathParamsSchema>;

 export const moveLearnMethodRetrieve200Schema = z.lazy(() => moveLearnMethodDetailSchema);
export type MoveLearnMethodRetrieve200Schema = z.infer<typeof moveLearnMethodRetrieve200Schema>;

 export const moveLearnMethodRetrieveQueryResponseSchema = z.lazy(() => moveLearnMethodDetailSchema);
export type MoveLearnMethodRetrieveQueryResponseSchema = z.infer<typeof moveLearnMethodRetrieveQueryResponseSchema>;