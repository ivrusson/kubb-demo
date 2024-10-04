import { languageSummarySchema } from "./languageSummarySchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const abilityFlavorTextSchema = z.object({ "flavor_text": z.string(), "language": z.lazy(() => languageSummarySchema), "version_group": z.lazy(() => versionGroupSummarySchema) });
export type AbilityFlavorTextSchema = z.infer<typeof abilityFlavorTextSchema>;