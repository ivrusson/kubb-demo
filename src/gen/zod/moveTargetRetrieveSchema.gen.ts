import { z } from "@/utils/zod.ts";
import { moveTargetDetailSchema } from "./moveTargetDetailSchema.gen";


export const moveTargetRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveTargetRetrievePathParamsSchema = z.infer<typeof moveTargetRetrievePathParamsSchema>;

 export const moveTargetRetrieve200Schema = z.lazy(() => moveTargetDetailSchema);
export type MoveTargetRetrieve200Schema = z.infer<typeof moveTargetRetrieve200Schema>;

 export const moveTargetRetrieveQueryResponseSchema = z.lazy(() => moveTargetDetailSchema);
export type MoveTargetRetrieveQueryResponseSchema = z.infer<typeof moveTargetRetrieveQueryResponseSchema>;