import { berrySummarySchema } from "./berrySummarySchema.gen";
import { berryFirmnessNameSchema } from "./berryFirmnessNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const berryFirmnessDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "berries": z.array(z.lazy(() => berrySummarySchema)), "names": z.array(z.lazy(() => berryFirmnessNameSchema)) });
export type BerryFirmnessDetailSchema = z.infer<typeof berryFirmnessDetailSchema>;