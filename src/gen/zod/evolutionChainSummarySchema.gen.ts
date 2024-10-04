import { z } from "@/utils/zod.ts";


export const evolutionChainSummarySchema = z.object({ "url": z.string().url() });
export type EvolutionChainSummarySchema = z.infer<typeof evolutionChainSummarySchema>;