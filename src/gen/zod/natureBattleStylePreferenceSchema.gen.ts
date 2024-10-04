import { moveBattleStyleSummarySchema } from "./moveBattleStyleSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const natureBattleStylePreferenceSchema = z.object({ "low_hp_preference": z.number().int(), "high_hp_preference": z.number().int(), "move_battle_style": z.lazy(() => moveBattleStyleSummarySchema) });
export type NatureBattleStylePreferenceSchema = z.infer<typeof natureBattleStylePreferenceSchema>;