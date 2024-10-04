import { itemFlingEffectSummarySchema } from "./itemFlingEffectSummarySchema.gen";
import { itemCategorySummarySchema } from "./itemCategorySummarySchema.gen";
import { itemEffectTextSchema } from "./itemEffectTextSchema.gen";
import { itemFlavorTextSchema } from "./itemFlavorTextSchema.gen";
import { itemGameIndexSchema } from "./itemGameIndexSchema.gen";
import { itemNameSchema } from "./itemNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const itemDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "cost": z.number().int().optional().nullable(), "fling_power": z.number().int().optional().nullable(), "fling_effect": z.lazy(() => itemFlingEffectSummarySchema), "attributes": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "category": z.lazy(() => itemCategorySummarySchema), "effect_entries": z.array(z.lazy(() => itemEffectTextSchema)), "flavor_text_entries": z.array(z.lazy(() => itemFlavorTextSchema)), "game_indices": z.array(z.lazy(() => itemGameIndexSchema)), "names": z.array(z.lazy(() => itemNameSchema)), "held_by_pokemon": z.array(z.object({ "pokemon": z.object({ "name": z.string(), "url": z.string().url() }), "version-details": z.array(z.object({ "rarity": z.number().int(), "version": z.object({ "name": z.string(), "url": z.string().url() }) })) })), "sprites": z.object({ "default": z.string().url() }), "baby_trigger_for": z.object({ "url": z.string().url() }), "machines": z.array(z.object({ "machine": z.string().url(), "version_group": z.object({ "name": z.string(), "url": z.string().url() }) })) });
export type ItemDetailSchema = z.infer<typeof itemDetailSchema>;