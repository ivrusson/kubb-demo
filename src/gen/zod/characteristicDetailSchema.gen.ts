import { statSummarySchema } from "./statSummarySchema.gen";
import { characteristicDescriptionSchema } from "./characteristicDescriptionSchema.gen";
import { z } from "@/utils/zod.ts";


export const characteristicDetailSchema = z.object({ "id": z.number().int(), "gene_modulo": z.number().int(), "possible_values": z.array(z.number().int()), "highest_stat": z.lazy(() => statSummarySchema), "descriptions": z.array(z.lazy(() => characteristicDescriptionSchema)) });
export type CharacteristicDetailSchema = z.infer<typeof characteristicDetailSchema>;