import { z } from "@/utils/zod.ts";
import { languageDetailSchema } from "./languageDetailSchema.gen";


export const languageRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type LanguageRetrievePathParamsSchema = z.infer<typeof languageRetrievePathParamsSchema>;

 export const languageRetrieve200Schema = z.lazy(() => languageDetailSchema);
export type LanguageRetrieve200Schema = z.infer<typeof languageRetrieve200Schema>;

 export const languageRetrieveQueryResponseSchema = z.lazy(() => languageDetailSchema);
export type LanguageRetrieveQueryResponseSchema = z.infer<typeof languageRetrieveQueryResponseSchema>;