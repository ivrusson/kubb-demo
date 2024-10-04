import { generationSummarySchema } from "./generationSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemGameIndexSchema = z.object({ "game_index": z.number().int(), "generation": z.lazy(() => generationSummarySchema) });
export type ItemGameIndexSchema = z.infer<typeof itemGameIndexSchema>;