import { z } from "@/utils/zod.ts";
import { moveBattleStyleDetailSchema } from "./moveBattleStyleDetailSchema.gen";


export const moveBattleStyleRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveBattleStyleRetrievePathParamsSchema = z.infer<typeof moveBattleStyleRetrievePathParamsSchema>;

 export const moveBattleStyleRetrieve200Schema = z.lazy(() => moveBattleStyleDetailSchema);
export type MoveBattleStyleRetrieve200Schema = z.infer<typeof moveBattleStyleRetrieve200Schema>;

 export const moveBattleStyleRetrieveQueryResponseSchema = z.lazy(() => moveBattleStyleDetailSchema);
export type MoveBattleStyleRetrieveQueryResponseSchema = z.infer<typeof moveBattleStyleRetrieveQueryResponseSchema>;