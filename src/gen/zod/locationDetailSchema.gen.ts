import { regionSummarySchema } from "./regionSummarySchema.gen";
import { locationNameSchema } from "./locationNameSchema.gen";
import { locationGameIndexSchema } from "./locationGameIndexSchema.gen";
import { locationAreaSummarySchema } from "./locationAreaSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const locationDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "region": z.lazy(() => regionSummarySchema), "names": z.array(z.lazy(() => locationNameSchema)), "game_indices": z.array(z.lazy(() => locationGameIndexSchema)), "areas": z.array(z.lazy(() => locationAreaSummarySchema)) });
export type LocationDetailSchema = z.infer<typeof locationDetailSchema>;