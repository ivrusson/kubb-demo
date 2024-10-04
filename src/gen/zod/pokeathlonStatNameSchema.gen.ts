import { languageSummarySchema } from "./languageSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const pokeathlonStatNameSchema = z.object({ "name": z.string().max(100), "language": z.lazy(() => languageSummarySchema) });
export type PokeathlonStatNameSchema = z.infer<typeof pokeathlonStatNameSchema>;