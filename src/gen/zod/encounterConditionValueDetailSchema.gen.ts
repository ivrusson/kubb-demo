import { encounterConditionSummarySchema } from "./encounterConditionSummarySchema.gen";
import { encounterConditionValueNameSchema } from "./encounterConditionValueNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const encounterConditionValueDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "condition": z.lazy(() => encounterConditionSummarySchema), "names": z.array(z.lazy(() => encounterConditionValueNameSchema)) });
export type EncounterConditionValueDetailSchema = z.infer<typeof encounterConditionValueDetailSchema>;