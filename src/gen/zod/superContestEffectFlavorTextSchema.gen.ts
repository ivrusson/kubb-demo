import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const superContestEffectFlavorTextSchema = z.object({ "flavor_text": z.string().max(500), "language": z.lazy(() => languageSummarySchema) });
export type SuperContestEffectFlavorTextSchema = z.infer<typeof superContestEffectFlavorTextSchema>;