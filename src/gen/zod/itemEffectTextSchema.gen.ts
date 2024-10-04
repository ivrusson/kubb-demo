import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemEffectTextSchema = z.object({ "effect": z.string().max(6000), "short_effect": z.string().max(300), "language": z.lazy(() => languageSummarySchema) });
export type ItemEffectTextSchema = z.infer<typeof itemEffectTextSchema>;