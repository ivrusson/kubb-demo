import { evolutionTriggerNameSchema } from "./evolutionTriggerNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const evolutionTriggerDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => evolutionTriggerNameSchema)), "pokemon_species": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type EvolutionTriggerDetailSchema = z.infer<typeof evolutionTriggerDetailSchema>;