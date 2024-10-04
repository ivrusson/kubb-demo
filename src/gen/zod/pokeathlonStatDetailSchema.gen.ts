import { pokeathlonStatNameSchema } from "./pokeathlonStatNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const pokeathlonStatDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "affecting_natures": z.object({ "decrease": z.array(z.object({ "max_change": z.number().int().max(-1), "nature": z.object({ "name": z.string(), "url": z.string().url() }) })), "increase": z.array(z.object({ "max_change": z.number().int().min(1), "nature": z.object({ "name": z.string(), "url": z.string().url() }) })) }), "names": z.array(z.lazy(() => pokeathlonStatNameSchema)) });
export type PokeathlonStatDetailSchema = z.infer<typeof pokeathlonStatDetailSchema>;