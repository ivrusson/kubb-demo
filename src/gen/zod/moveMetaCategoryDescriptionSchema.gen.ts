import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveMetaCategoryDescriptionSchema = z.object({ "description": z.string().max(1000).optional(), "language": z.lazy(() => languageSummarySchema) });
export type MoveMetaCategoryDescriptionSchema = z.infer<typeof moveMetaCategoryDescriptionSchema>;