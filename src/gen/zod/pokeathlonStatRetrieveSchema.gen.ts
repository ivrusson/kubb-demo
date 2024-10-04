import { z } from "@/utils/zod.ts";
import { pokeathlonStatDetailSchema } from "./pokeathlonStatDetailSchema.gen";


export const pokeathlonStatRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokeathlonStatRetrievePathParamsSchema = z.infer<typeof pokeathlonStatRetrievePathParamsSchema>;

 export const pokeathlonStatRetrieve200Schema = z.lazy(() => pokeathlonStatDetailSchema);
export type PokeathlonStatRetrieve200Schema = z.infer<typeof pokeathlonStatRetrieve200Schema>;

 export const pokeathlonStatRetrieveQueryResponseSchema = z.lazy(() => pokeathlonStatDetailSchema);
export type PokeathlonStatRetrieveQueryResponseSchema = z.infer<typeof pokeathlonStatRetrieveQueryResponseSchema>;