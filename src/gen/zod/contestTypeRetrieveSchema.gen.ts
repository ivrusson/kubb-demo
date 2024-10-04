import { z } from "@/utils/zod.ts";
import { contestTypeDetailSchema } from "./contestTypeDetailSchema.gen";


export const contestTypeRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ContestTypeRetrievePathParamsSchema = z.infer<typeof contestTypeRetrievePathParamsSchema>;

 export const contestTypeRetrieve200Schema = z.lazy(() => contestTypeDetailSchema);
export type ContestTypeRetrieve200Schema = z.infer<typeof contestTypeRetrieve200Schema>;

 export const contestTypeRetrieveQueryResponseSchema = z.lazy(() => contestTypeDetailSchema);
export type ContestTypeRetrieveQueryResponseSchema = z.infer<typeof contestTypeRetrieveQueryResponseSchema>;