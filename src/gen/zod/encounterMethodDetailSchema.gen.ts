import { encounterMethodNameSchema } from "./encounterMethodNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const encounterMethodDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "order": z.number().int().optional().nullable(), "names": z.array(z.lazy(() => encounterMethodNameSchema)) });
export type EncounterMethodDetailSchema = z.infer<typeof encounterMethodDetailSchema>;