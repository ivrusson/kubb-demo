import { itemAttributeDescriptionSchema } from "./itemAttributeDescriptionSchema.gen";
import { itemAttributeNameSchema } from "./itemAttributeNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const itemAttributeDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "descriptions": z.array(z.lazy(() => itemAttributeDescriptionSchema)), "items": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "names": z.array(z.lazy(() => itemAttributeNameSchema)) });
export type ItemAttributeDetailSchema = z.infer<typeof itemAttributeDetailSchema>;