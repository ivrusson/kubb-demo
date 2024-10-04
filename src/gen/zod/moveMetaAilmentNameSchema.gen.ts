import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveMetaAilmentNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type MoveMetaAilmentNameSchema = z.infer<typeof moveMetaAilmentNameSchema>;