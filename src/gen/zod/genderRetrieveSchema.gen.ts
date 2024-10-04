import { z } from "@/utils/zod.ts";
import { genderDetailSchema } from "./genderDetailSchema.gen";


export const genderRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type GenderRetrievePathParamsSchema = z.infer<typeof genderRetrievePathParamsSchema>;

 export const genderRetrieve200Schema = z.lazy(() => genderDetailSchema);
export type GenderRetrieve200Schema = z.infer<typeof genderRetrieve200Schema>;

 export const genderRetrieveQueryResponseSchema = z.lazy(() => genderDetailSchema);
export type GenderRetrieveQueryResponseSchema = z.infer<typeof genderRetrieveQueryResponseSchema>;