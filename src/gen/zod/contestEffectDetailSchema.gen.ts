import { contestEffectEffectTextSchema } from "./contestEffectEffectTextSchema.gen";
import { contestEffectFlavorTextSchema } from "./contestEffectFlavorTextSchema.gen";
import { z } from "@/utils/zod.ts";


export const contestEffectDetailSchema = z.object({ "id": z.number().int(), "appeal": z.number().int(), "jam": z.number().int(), "effect_entries": z.array(z.lazy(() => contestEffectEffectTextSchema)), "flavor_text_entries": z.array(z.lazy(() => contestEffectFlavorTextSchema)) });
export type ContestEffectDetailSchema = z.infer<typeof contestEffectDetailSchema>;