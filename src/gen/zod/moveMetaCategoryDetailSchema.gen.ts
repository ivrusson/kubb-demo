import { moveMetaCategoryDescriptionSchema } from "./moveMetaCategoryDescriptionSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveMetaCategoryDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "descriptions": z.array(z.lazy(() => moveMetaCategoryDescriptionSchema)), "moves": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type MoveMetaCategoryDetailSchema = z.infer<typeof moveMetaCategoryDetailSchema>;