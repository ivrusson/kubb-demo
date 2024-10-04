import { z } from "@/utils/zod.ts";
import { berryFlavorDetailSchema } from "./berryFlavorDetailSchema.gen";


export const berryFlavorRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type BerryFlavorRetrievePathParamsSchema = z.infer<typeof berryFlavorRetrievePathParamsSchema>;

 export const berryFlavorRetrieve200Schema = z.lazy(() => berryFlavorDetailSchema);
export type BerryFlavorRetrieve200Schema = z.infer<typeof berryFlavorRetrieve200Schema>;

 export const berryFlavorRetrieveQueryResponseSchema = z.lazy(() => berryFlavorDetailSchema);
export type BerryFlavorRetrieveQueryResponseSchema = z.infer<typeof berryFlavorRetrieveQueryResponseSchema>;