import { generationSummarySchema } from "./generationSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const locationGameIndexSchema = z.object({ "game_index": z.number().int(), "generation": z.lazy(() => generationSummarySchema) });
export type LocationGameIndexSchema = z.infer<typeof locationGameIndexSchema>;