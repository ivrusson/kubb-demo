import { z } from "@/utils/zod.ts";
import { contestEffectDetailSchema } from "./contestEffectDetailSchema.gen";


export const contestEffectRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type ContestEffectRetrievePathParamsSchema = z.infer<typeof contestEffectRetrievePathParamsSchema>;

 export const contestEffectRetrieve200Schema = z.lazy(() => contestEffectDetailSchema);
export type ContestEffectRetrieve200Schema = z.infer<typeof contestEffectRetrieve200Schema>;

 export const contestEffectRetrieveQueryResponseSchema = z.lazy(() => contestEffectDetailSchema);
export type ContestEffectRetrieveQueryResponseSchema = z.infer<typeof contestEffectRetrieveQueryResponseSchema>;