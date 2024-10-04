import { moveTargetDescriptionSchema } from "./moveTargetDescriptionSchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { moveTargetNameSchema } from "./moveTargetNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveTargetDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "descriptions": z.array(z.lazy(() => moveTargetDescriptionSchema)), "moves": z.array(z.lazy(() => moveSummarySchema)), "names": z.array(z.lazy(() => moveTargetNameSchema)) });
export type MoveTargetDetailSchema = z.infer<typeof moveTargetDetailSchema>;