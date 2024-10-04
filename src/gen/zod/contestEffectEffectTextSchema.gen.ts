import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const contestEffectEffectTextSchema = z.object({ "effect": z.string().max(6000), "language": z.lazy(() => languageSummarySchema) });
export type ContestEffectEffectTextSchema = z.infer<typeof contestEffectEffectTextSchema>;