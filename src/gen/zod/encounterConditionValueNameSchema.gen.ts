import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const encounterConditionValueNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type EncounterConditionValueNameSchema = z.infer<typeof encounterConditionValueNameSchema>;