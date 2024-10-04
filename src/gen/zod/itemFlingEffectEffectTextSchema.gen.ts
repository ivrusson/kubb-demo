import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemFlingEffectEffectTextSchema = z.object({ "effect": z.string().max(6000), "language": z.lazy(() => languageSummarySchema) });
export type ItemFlingEffectEffectTextSchema = z.infer<typeof itemFlingEffectEffectTextSchema>;