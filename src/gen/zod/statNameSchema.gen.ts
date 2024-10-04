import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const statNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type StatNameSchema = z.infer<typeof statNameSchema>;