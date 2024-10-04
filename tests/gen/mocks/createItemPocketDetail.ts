import { createItemCategorySummary } from "./createItemCategorySummary";
import { createItemPocketName } from "./createItemPocketName";
import { faker } from "@faker-js/faker";
import type { ItemPocketDetailType } from "../ts/ItemPocketDetailType";


export function createItemPocketDetail(data: NonNullable<Partial<ItemPocketDetailType>> = {}): NonNullable<ItemPocketDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "categories": faker.helpers.arrayElements([createItemCategorySummary()]) as any, "names": faker.helpers.arrayElements([createItemPocketName()]) as any },
        ...data
    };
}