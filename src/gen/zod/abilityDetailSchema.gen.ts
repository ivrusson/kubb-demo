import { generationSummarySchema } from "./generationSummarySchema.gen";
import { abilityNameSchema } from "./abilityNameSchema.gen";
import { abilityEffectTextSchema } from "./abilityEffectTextSchema.gen";
import { abilityChangeSchema } from "./abilityChangeSchema.gen";
import { abilityFlavorTextSchema } from "./abilityFlavorTextSchema.gen";
import { z } from "@/utils/zod.ts";


export const abilityDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "is_main_series": z.boolean().optional(), "generation": z.lazy(() => generationSummarySchema), "names": z.array(z.lazy(() => abilityNameSchema)), "effect_entries": z.array(z.lazy(() => abilityEffectTextSchema)), "effect_changes": z.array(z.lazy(() => abilityChangeSchema)), "flavor_text_entries": z.array(z.lazy(() => abilityFlavorTextSchema)), "pokemon": z.array(z.object({ "is_hidden": z.boolean(), "slot": z.number().int(), "pokemon": z.object({ "name": z.string(), "url": z.string().url() }) })) });
export type AbilityDetailSchema = z.infer<typeof abilityDetailSchema>;