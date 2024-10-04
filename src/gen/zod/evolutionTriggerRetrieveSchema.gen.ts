import { z } from "@/utils/zod.ts";
import { evolutionTriggerDetailSchema } from "./evolutionTriggerDetailSchema.gen";


export const evolutionTriggerRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EvolutionTriggerRetrievePathParamsSchema = z.infer<typeof evolutionTriggerRetrievePathParamsSchema>;

 export const evolutionTriggerRetrieve200Schema = z.lazy(() => evolutionTriggerDetailSchema);
export type EvolutionTriggerRetrieve200Schema = z.infer<typeof evolutionTriggerRetrieve200Schema>;

 export const evolutionTriggerRetrieveQueryResponseSchema = z.lazy(() => evolutionTriggerDetailSchema);
export type EvolutionTriggerRetrieveQueryResponseSchema = z.infer<typeof evolutionTriggerRetrieveQueryResponseSchema>;