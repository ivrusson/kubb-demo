import { z } from "@/utils/zod.ts";
import { berryDetailSchema } from "./berryDetailSchema.gen";


export const berryRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type BerryRetrievePathParamsSchema = z.infer<typeof berryRetrievePathParamsSchema>;

 export const berryRetrieve200Schema = z.lazy(() => berryDetailSchema);
export type BerryRetrieve200Schema = z.infer<typeof berryRetrieve200Schema>;

 export const berryRetrieveQueryResponseSchema = z.lazy(() => berryDetailSchema);
export type BerryRetrieveQueryResponseSchema = z.infer<typeof berryRetrieveQueryResponseSchema>;