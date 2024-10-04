import { statSummarySchema } from "./statSummarySchema.gen";
import { berryFlavorSummarySchema } from "./berryFlavorSummarySchema.gen";
import { berrySummarySchema } from "./berrySummarySchema.gen";
import { natureBattleStylePreferenceSchema } from "./natureBattleStylePreferenceSchema.gen";
import { natureNameSchema } from "./natureNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const natureDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "decreased_stat": z.lazy(() => statSummarySchema), "increased_stat": z.lazy(() => statSummarySchema), "likes_flavor": z.lazy(() => berryFlavorSummarySchema), "hates_flavor": z.lazy(() => berryFlavorSummarySchema), "berries": z.array(z.lazy(() => berrySummarySchema)), "pokeathlon_stat_changes": z.array(z.object({ "max_change": z.number().int(), "pokeathlon_stat": z.object({ "name": z.string(), "url": z.string().url() }) })), "move_battle_style_preferences": z.array(z.lazy(() => natureBattleStylePreferenceSchema)), "names": z.array(z.lazy(() => natureNameSchema)) });
export type NatureDetailSchema = z.infer<typeof natureDetailSchema>;