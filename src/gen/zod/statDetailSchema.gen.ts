import { characteristicSummarySchema } from "./characteristicSummarySchema.gen";
import { moveDamageClassSummarySchema } from "./moveDamageClassSummarySchema.gen";
import { statNameSchema } from "./statNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const statDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "game_index": z.number().int(), "is_battle_only": z.boolean().optional(), "affecting_moves": z.object({ "increase": z.array(z.object({ "change": z.number().int(), "move": z.object({ "name": z.string(), "url": z.string().url() }) })), "decrease": z.array(z.object({ "change": z.number().int(), "move": z.object({ "name": z.string(), "url": z.string().url() }) })) }), "affecting_natures": z.object({ "increase": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "decrease": z.array(z.object({ "name": z.string(), "url": z.string().url() })) }), "characteristics": z.array(z.lazy(() => characteristicSummarySchema)), "move_damage_class": z.lazy(() => moveDamageClassSummarySchema), "names": z.array(z.lazy(() => statNameSchema)) });
export type StatDetailSchema = z.infer<typeof statDetailSchema>;