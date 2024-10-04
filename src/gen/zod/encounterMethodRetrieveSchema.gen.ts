import { z } from "@/utils/zod.ts";
import { encounterMethodDetailSchema } from "./encounterMethodDetailSchema.gen";


export const encounterMethodRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EncounterMethodRetrievePathParamsSchema = z.infer<typeof encounterMethodRetrievePathParamsSchema>;

 export const encounterMethodRetrieve200Schema = z.lazy(() => encounterMethodDetailSchema);
export type EncounterMethodRetrieve200Schema = z.infer<typeof encounterMethodRetrieve200Schema>;

 export const encounterMethodRetrieveQueryResponseSchema = z.lazy(() => encounterMethodDetailSchema);
export type EncounterMethodRetrieveQueryResponseSchema = z.infer<typeof encounterMethodRetrieveQueryResponseSchema>;