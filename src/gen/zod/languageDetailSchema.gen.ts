import { languageNameSchema } from "./languageNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const languageDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "official": z.boolean().optional(), "iso639": z.string().max(10), "iso3166": z.string().max(2), "names": z.array(z.lazy(() => languageNameSchema)) });
export type LanguageDetailSchema = z.infer<typeof languageDetailSchema>;