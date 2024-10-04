import { moveLearnMethodNameSchema } from "./moveLearnMethodNameSchema.gen";
import { moveLearnMethodDescriptionSchema } from "./moveLearnMethodDescriptionSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveLearnMethodDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => moveLearnMethodNameSchema)), "descriptions": z.array(z.lazy(() => moveLearnMethodDescriptionSchema)), "version_groups": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type MoveLearnMethodDetailSchema = z.infer<typeof moveLearnMethodDetailSchema>;