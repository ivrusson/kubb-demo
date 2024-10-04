import { z } from "@/utils/zod.ts";
import { palParkAreaDetailSchema } from "./palParkAreaDetailSchema.gen";


export const palParkAreaRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PalParkAreaRetrievePathParamsSchema = z.infer<typeof palParkAreaRetrievePathParamsSchema>;

 export const palParkAreaRetrieve200Schema = z.lazy(() => palParkAreaDetailSchema);
export type PalParkAreaRetrieve200Schema = z.infer<typeof palParkAreaRetrieve200Schema>;

 export const palParkAreaRetrieveQueryResponseSchema = z.lazy(() => palParkAreaDetailSchema);
export type PalParkAreaRetrieveQueryResponseSchema = z.infer<typeof palParkAreaRetrieveQueryResponseSchema>;