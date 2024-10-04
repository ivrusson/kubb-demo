import { z } from "@/utils/zod.ts";
import { encounterConditionValueDetailSchema } from "./encounterConditionValueDetailSchema.gen";


export const encounterConditionValueRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EncounterConditionValueRetrievePathParamsSchema = z.infer<typeof encounterConditionValueRetrievePathParamsSchema>;

 export const encounterConditionValueRetrieve200Schema = z.lazy(() => encounterConditionValueDetailSchema);
export type EncounterConditionValueRetrieve200Schema = z.infer<typeof encounterConditionValueRetrieve200Schema>;

 export const encounterConditionValueRetrieveQueryResponseSchema = z.lazy(() => encounterConditionValueDetailSchema);
export type EncounterConditionValueRetrieveQueryResponseSchema = z.infer<typeof encounterConditionValueRetrieveQueryResponseSchema>;