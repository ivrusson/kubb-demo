import { z } from "@/utils/zod.ts";
import { berryFirmnessDetailSchema } from "./berryFirmnessDetailSchema.gen";


export const berryFirmnessRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type BerryFirmnessRetrievePathParamsSchema = z.infer<typeof berryFirmnessRetrievePathParamsSchema>;

 export const berryFirmnessRetrieve200Schema = z.lazy(() => berryFirmnessDetailSchema);
export type BerryFirmnessRetrieve200Schema = z.infer<typeof berryFirmnessRetrieve200Schema>;

 export const berryFirmnessRetrieveQueryResponseSchema = z.lazy(() => berryFirmnessDetailSchema);
export type BerryFirmnessRetrieveQueryResponseSchema = z.infer<typeof berryFirmnessRetrieveQueryResponseSchema>;