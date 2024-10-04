import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const versionNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type VersionNameSchema = z.infer<typeof versionNameSchema>;