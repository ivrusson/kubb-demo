import { generationSummarySchema } from "./generationSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const typeGameIndexSchema = z.object({ "game_index": z.number().int(), "generation": z.lazy(() => generationSummarySchema) });
export type TypeGameIndexSchema = z.infer<typeof typeGameIndexSchema>;