import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { abilityChangeEffectTextSchema } from "./abilityChangeEffectTextSchema.gen";
import { z } from "@/utils/zod.ts";


export const abilityChangeSchema = z.object({ "version_group": z.lazy(() => versionGroupSummarySchema), "effect_entries": z.array(z.lazy(() => abilityChangeEffectTextSchema)) });
export type AbilityChangeSchema = z.infer<typeof abilityChangeSchema>;