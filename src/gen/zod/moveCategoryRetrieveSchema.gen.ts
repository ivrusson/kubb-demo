import { z } from "@/utils/zod.ts";
import { moveMetaCategoryDetailSchema } from "./moveMetaCategoryDetailSchema.gen";


export const moveCategoryRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MoveCategoryRetrievePathParamsSchema = z.infer<typeof moveCategoryRetrievePathParamsSchema>;

 export const moveCategoryRetrieve200Schema = z.lazy(() => moveMetaCategoryDetailSchema);
export type MoveCategoryRetrieve200Schema = z.infer<typeof moveCategoryRetrieve200Schema>;

 export const moveCategoryRetrieveQueryResponseSchema = z.lazy(() => moveMetaCategoryDetailSchema);
export type MoveCategoryRetrieveQueryResponseSchema = z.infer<typeof moveCategoryRetrieveQueryResponseSchema>;