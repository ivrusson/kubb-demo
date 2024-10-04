import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const contestTypeNameSchema = z.object({ "name": z.string().max(100), "color": z.string().max(10), "language": z.lazy(() => languageSummarySchema) });
export type ContestTypeNameSchema = z.infer<typeof contestTypeNameSchema>;