import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const contestEffectFlavorTextSchema = z.object({ "flavor_text": z.string().max(500), "language": z.lazy(() => languageSummarySchema) });
export type ContestEffectFlavorTextSchema = z.infer<typeof contestEffectFlavorTextSchema>;