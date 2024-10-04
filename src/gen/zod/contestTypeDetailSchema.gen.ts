import { berryFlavorSummarySchema } from "./berryFlavorSummarySchema.gen";
import { contestTypeNameSchema } from "./contestTypeNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const contestTypeDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "berry_flavor": z.lazy(() => berryFlavorSummarySchema), "names": z.array(z.lazy(() => contestTypeNameSchema)) });
export type ContestTypeDetailSchema = z.infer<typeof contestTypeDetailSchema>;