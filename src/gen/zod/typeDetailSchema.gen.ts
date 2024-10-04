import { typeGameIndexSchema } from "./typeGameIndexSchema.gen";
import { generationSummarySchema } from "./generationSummarySchema.gen";
import { moveDamageClassSummarySchema } from "./moveDamageClassSummarySchema.gen";
import { abilityNameSchema } from "./abilityNameSchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { z } from "@/utils/zod.ts";

 /**
 * @description Serializer for the Type resource
 */
export const typeDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "damage_relations": z.object({ "no_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "half_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "double_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "no_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "half_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "double_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })) }), "past_damage_relations": z.array(z.object({ "generation": z.object({ "name": z.string(), "url": z.string().url() }), "damage_relations": z.object({ "no_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "half_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "double_damage_to": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "no_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "half_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "double_damage_from": z.array(z.object({ "name": z.string(), "url": z.string().url() })) }) })), "game_indices": z.array(z.lazy(() => typeGameIndexSchema)), "generation": z.lazy(() => generationSummarySchema), "move_damage_class": z.lazy(() => moveDamageClassSummarySchema), "names": z.array(z.lazy(() => abilityNameSchema)), "pokemon": z.array(z.object({ "slot": z.number().int().optional(), "pokemon": z.object({ "name": z.string().describe("The name of the pokemon").optional(), "url": z.string().url().describe("The URL to get more information about the pokemon").optional() }).optional() })), "moves": z.array(z.lazy(() => moveSummarySchema)) }).describe("Serializer for the Type resource");
export type TypeDetailSchema = z.infer<typeof typeDetailSchema>;