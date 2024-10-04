import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveTargetDescriptionSchema = z.object({ "description": z.string().max(1000).optional(), "language": z.lazy(() => languageSummarySchema) });
export type MoveTargetDescriptionSchema = z.infer<typeof moveTargetDescriptionSchema>;