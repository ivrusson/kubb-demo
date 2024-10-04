import { moveMetaAilmentNameSchema } from "./moveMetaAilmentNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveMetaAilmentDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "moves": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "names": z.array(z.lazy(() => moveMetaAilmentNameSchema)) });
export type MoveMetaAilmentDetailSchema = z.infer<typeof moveMetaAilmentDetailSchema>;