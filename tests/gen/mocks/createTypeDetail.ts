import { createTypeGameIndex } from "./createTypeGameIndex";
import { createGenerationSummary } from "./createGenerationSummary";
import { createMoveDamageClassSummary } from "./createMoveDamageClassSummary";
import { createAbilityName } from "./createAbilityName";
import { createMoveSummary } from "./createMoveSummary";
import { faker } from "@faker-js/faker";
import type { TypeDetailType } from "../ts/TypeDetailType";

 /**
 * @description Serializer for the Type resource
 */
export function createTypeDetail(data: NonNullable<Partial<TypeDetailType>> = {}): NonNullable<TypeDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "damage_relations": { "no_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "half_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "double_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "no_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "half_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "double_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any }, "past_damage_relations": faker.helpers.arrayElements([{ "generation": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "damage_relations": { "no_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "half_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "double_damage_to": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "no_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "half_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "double_damage_from": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any } }]) as any, "game_indices": faker.helpers.arrayElements([createTypeGameIndex()]) as any, "generation": createGenerationSummary(), "move_damage_class": createMoveDamageClassSummary(), "names": faker.helpers.arrayElements([createAbilityName()]) as any, "pokemon": faker.helpers.arrayElements([{ "slot": faker.number.int(), "pokemon": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "moves": faker.helpers.arrayElements([createMoveSummary()]) as any },
        ...data
    };
}