import { moveMetaAilmentSummarySchema } from "./moveMetaAilmentSummarySchema.gen";
import { moveMetaCategorySummarySchema } from "./moveMetaCategorySummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveMetaSchema = z.object({ "ailment": z.lazy(() => moveMetaAilmentSummarySchema), "category": z.lazy(() => moveMetaCategorySummarySchema), "min_hits": z.number().int().optional().nullable(), "max_hits": z.number().int().optional().nullable(), "min_turns": z.number().int().optional().nullable(), "max_turns": z.number().int().optional().nullable(), "drain": z.number().int().optional().nullable(), "healing": z.number().int().optional().nullable(), "crit_rate": z.number().int().optional().nullable(), "ailment_chance": z.number().int().optional().nullable(), "flinch_chance": z.number().int().optional().nullable(), "stat_chance": z.number().int().optional().nullable() });
export type MoveMetaSchema = z.infer<typeof moveMetaSchema>;