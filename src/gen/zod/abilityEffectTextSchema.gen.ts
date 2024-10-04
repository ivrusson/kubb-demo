import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const abilityEffectTextSchema = z.object({ "effect": z.string().max(6000), "short_effect": z.string().max(300), "language": z.lazy(() => languageSummarySchema) });
export type AbilityEffectTextSchema = z.infer<typeof abilityEffectTextSchema>;