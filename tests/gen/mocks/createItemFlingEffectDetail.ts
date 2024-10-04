import { createItemFlingEffectEffectText } from "./createItemFlingEffectEffectText";
import { createItemSummary } from "./createItemSummary";
import { faker } from "@faker-js/faker";
import type { ItemFlingEffectDetailType } from "../ts/ItemFlingEffectDetailType";


export function createItemFlingEffectDetail(data: NonNullable<Partial<ItemFlingEffectDetailType>> = {}): NonNullable<ItemFlingEffectDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "effect_entries": faker.helpers.arrayElements([createItemFlingEffectEffectText()]) as any, "items": faker.helpers.arrayElements([createItemSummary()]) as any },
        ...data
    };
}