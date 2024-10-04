import { superContestEffectFlavorTextSchema } from "./superContestEffectFlavorTextSchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const superContestEffectDetailSchema = z.object({ "id": z.number().int(), "appeal": z.number().int(), "flavor_text_entries": z.array(z.lazy(() => superContestEffectFlavorTextSchema)), "moves": z.array(z.lazy(() => moveSummarySchema)) });
export type SuperContestEffectDetailSchema = z.infer<typeof superContestEffectDetailSchema>;