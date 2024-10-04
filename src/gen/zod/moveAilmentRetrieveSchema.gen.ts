import { z } from "@/utils/zod.ts";
import { moveMetaAilmentDetailSchema } from "./moveMetaAilmentDetailSchema.gen";


export const moveAilmentRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveAilmentRetrievePathParamsSchema = z.infer<typeof moveAilmentRetrievePathParamsSchema>;

 export const moveAilmentRetrieve200Schema = z.lazy(() => moveMetaAilmentDetailSchema);
export type MoveAilmentRetrieve200Schema = z.infer<typeof moveAilmentRetrieve200Schema>;

 export const moveAilmentRetrieveQueryResponseSchema = z.lazy(() => moveMetaAilmentDetailSchema);
export type MoveAilmentRetrieveQueryResponseSchema = z.infer<typeof moveAilmentRetrieveQueryResponseSchema>;