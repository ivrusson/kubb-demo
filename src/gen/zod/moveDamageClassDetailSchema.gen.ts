import { moveDamageClassDescriptionSchema } from "./moveDamageClassDescriptionSchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { moveDamageClassNameSchema } from "./moveDamageClassNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveDamageClassDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "descriptions": z.array(z.lazy(() => moveDamageClassDescriptionSchema)), "moves": z.array(z.lazy(() => moveSummarySchema)), "names": z.array(z.lazy(() => moveDamageClassNameSchema)) });
export type MoveDamageClassDetailSchema = z.infer<typeof moveDamageClassDetailSchema>;