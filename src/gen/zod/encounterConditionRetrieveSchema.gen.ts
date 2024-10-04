import { z } from "@/utils/zod.ts";
import { encounterConditionDetailSchema } from "./encounterConditionDetailSchema.gen";


export const encounterConditionRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EncounterConditionRetrievePathParamsSchema = z.infer<typeof encounterConditionRetrievePathParamsSchema>;

 export const encounterConditionRetrieve200Schema = z.lazy(() => encounterConditionDetailSchema);
export type EncounterConditionRetrieve200Schema = z.infer<typeof encounterConditionRetrieve200Schema>;

 export const encounterConditionRetrieveQueryResponseSchema = z.lazy(() => encounterConditionDetailSchema);
export type EncounterConditionRetrieveQueryResponseSchema = z.infer<typeof encounterConditionRetrieveQueryResponseSchema>;