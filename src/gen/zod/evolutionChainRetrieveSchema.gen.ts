import { z } from "@/utils/zod.ts";
import { evolutionChainDetailSchema } from "./evolutionChainDetailSchema.gen";


export const evolutionChainRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type EvolutionChainRetrievePathParamsSchema = z.infer<typeof evolutionChainRetrievePathParamsSchema>;

 export const evolutionChainRetrieve200Schema = z.lazy(() => evolutionChainDetailSchema);
export type EvolutionChainRetrieve200Schema = z.infer<typeof evolutionChainRetrieve200Schema>;

 export const evolutionChainRetrieveQueryResponseSchema = z.lazy(() => evolutionChainDetailSchema);
export type EvolutionChainRetrieveQueryResponseSchema = z.infer<typeof evolutionChainRetrieveQueryResponseSchema>;