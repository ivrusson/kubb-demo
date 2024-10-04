import { createCharacteristicSummary } from "./createCharacteristicSummary";
import { createMoveDamageClassSummary } from "./createMoveDamageClassSummary";
import { createStatName } from "./createStatName";
import { faker } from "@faker-js/faker";
import type { StatDetailType } from "../ts/StatDetailType";


export function createStatDetail(data: NonNullable<Partial<StatDetailType>> = {}): NonNullable<StatDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "game_index": faker.number.int(), "is_battle_only": faker.datatype.boolean(), "affecting_moves": { "increase": faker.helpers.arrayElements([{ "change": faker.number.int(), "move": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "decrease": faker.helpers.arrayElements([{ "change": faker.number.int(), "move": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }, "affecting_natures": { "increase": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "decrease": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any }, "characteristics": faker.helpers.arrayElements([createCharacteristicSummary()]) as any, "move_damage_class": createMoveDamageClassSummary(), "names": faker.helpers.arrayElements([createStatName()]) as any },
        ...data
    };
}