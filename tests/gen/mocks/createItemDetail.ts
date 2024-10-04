import { createItemFlingEffectSummary } from "./createItemFlingEffectSummary";
import { createItemCategorySummary } from "./createItemCategorySummary";
import { createItemEffectText } from "./createItemEffectText";
import { createItemFlavorText } from "./createItemFlavorText";
import { createItemGameIndex } from "./createItemGameIndex";
import { createItemName } from "./createItemName";
import { faker } from "@faker-js/faker";
import type { ItemDetailType } from "../ts/ItemDetailType";


export function createItemDetail(data: NonNullable<Partial<ItemDetailType>> = {}): NonNullable<ItemDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "cost": faker.number.int(), "fling_power": faker.number.int(), "fling_effect": createItemFlingEffectSummary(), "attributes": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "category": createItemCategorySummary(), "effect_entries": faker.helpers.arrayElements([createItemEffectText()]) as any, "flavor_text_entries": faker.helpers.arrayElements([createItemFlavorText()]) as any, "game_indices": faker.helpers.arrayElements([createItemGameIndex()]) as any, "names": faker.helpers.arrayElements([createItemName()]) as any, "held_by_pokemon": faker.helpers.arrayElements([{ "pokemon": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version-details": faker.helpers.arrayElements([{ "rarity": faker.number.int(), "version": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }]) as any, "sprites": { "default": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]) }, "baby_trigger_for": { "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "machines": faker.helpers.arrayElements([{ "machine": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "version_group": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any },
        ...data
    };
}