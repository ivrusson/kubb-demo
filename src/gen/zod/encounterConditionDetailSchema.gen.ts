import { encounterConditionValueSummarySchema } from "./encounterConditionValueSummarySchema.gen";
import { encounterConditionNameSchema } from "./encounterConditionNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const encounterConditionDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "values": z.array(z.lazy(() => encounterConditionValueSummarySchema)), "names": z.array(z.lazy(() => encounterConditionNameSchema)) });
export type EncounterConditionDetailSchema = z.infer<typeof encounterConditionDetailSchema>;