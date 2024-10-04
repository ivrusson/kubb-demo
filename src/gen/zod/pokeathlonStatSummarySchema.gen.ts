import { z } from "@/utils/zod.ts";


export const pokeathlonStatSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type PokeathlonStatSummarySchema = z.infer<typeof pokeathlonStatSummarySchema>;