import { z } from "@/utils/zod.ts";
import { characteristicDetailSchema } from "./characteristicDetailSchema.gen";


export const characteristicRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type CharacteristicRetrievePathParamsSchema = z.infer<typeof characteristicRetrievePathParamsSchema>;

 export const characteristicRetrieve200Schema = z.lazy(() => characteristicDetailSchema);
export type CharacteristicRetrieve200Schema = z.infer<typeof characteristicRetrieve200Schema>;

 export const characteristicRetrieveQueryResponseSchema = z.lazy(() => characteristicDetailSchema);
export type CharacteristicRetrieveQueryResponseSchema = z.infer<typeof characteristicRetrieveQueryResponseSchema>;