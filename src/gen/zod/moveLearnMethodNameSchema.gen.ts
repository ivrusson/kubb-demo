import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveLearnMethodNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type MoveLearnMethodNameSchema = z.infer<typeof moveLearnMethodNameSchema>;