import { itemFlingEffectEffectTextSchema } from "./itemFlingEffectEffectTextSchema.gen";
import { itemSummarySchema } from "./itemSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemFlingEffectDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "effect_entries": z.array(z.lazy(() => itemFlingEffectEffectTextSchema)), "items": z.array(z.lazy(() => itemSummarySchema)) });
export type ItemFlingEffectDetailSchema = z.infer<typeof itemFlingEffectDetailSchema>;