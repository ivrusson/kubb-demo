import { languageSummarySchema } from "./languageSummarySchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveFlavorTextSchema = z.object({ "flavor_text": z.string(), "language": z.lazy(() => languageSummarySchema), "version_group": z.lazy(() => versionGroupSummarySchema) });
export type MoveFlavorTextSchema = z.infer<typeof moveFlavorTextSchema>;