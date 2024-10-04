import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const abilityChangeEffectTextSchema = z.object({ "effect": z.string().max(6000), "language": z.lazy(() => languageSummarySchema) });
export type AbilityChangeEffectTextSchema = z.infer<typeof abilityChangeEffectTextSchema>;