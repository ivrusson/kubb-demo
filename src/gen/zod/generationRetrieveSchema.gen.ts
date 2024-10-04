import { z } from "@/utils/zod.ts";
import { generationDetailSchema } from "./generationDetailSchema.gen";


export const generationRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type GenerationRetrievePathParamsSchema = z.infer<typeof generationRetrievePathParamsSchema>;

 export const generationRetrieve200Schema = z.lazy(() => generationDetailSchema);
export type GenerationRetrieve200Schema = z.infer<typeof generationRetrieve200Schema>;

 export const generationRetrieveQueryResponseSchema = z.lazy(() => generationDetailSchema);
export type GenerationRetrieveQueryResponseSchema = z.infer<typeof generationRetrieveQueryResponseSchema>;