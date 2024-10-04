import { palParkAreaNameSchema } from "./palParkAreaNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const palParkAreaDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => palParkAreaNameSchema)), "pokemon_encounters": z.array(z.object({ "base_score": z.number().int(), "pokemon-species": z.object({ "name": z.string(), "url": z.string().url() }), "rate": z.number().int() })) });
export type PalParkAreaDetailSchema = z.infer<typeof palParkAreaDetailSchema>;