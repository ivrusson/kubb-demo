import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemFlavorTextSchema = z.object({ "text": z.string(), "version_group": z.lazy(() => versionGroupSummarySchema), "language": z.lazy(() => languageSummarySchema) });
export type ItemFlavorTextSchema = z.infer<typeof itemFlavorTextSchema>;