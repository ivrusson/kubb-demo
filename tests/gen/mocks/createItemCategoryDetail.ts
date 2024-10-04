import { createItemSummary } from "./createItemSummary";
import { createItemCategoryName } from "./createItemCategoryName";
import { createItemPocketSummary } from "./createItemPocketSummary";
import { faker } from "@faker-js/faker";
import type { ItemCategoryDetailType } from "../ts/ItemCategoryDetailType";


export function createItemCategoryDetail(data: NonNullable<Partial<ItemCategoryDetailType>> = {}): NonNullable<ItemCategoryDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "items": faker.helpers.arrayElements([createItemSummary()]) as any, "names": faker.helpers.arrayElements([createItemCategoryName()]) as any, "pocket": createItemPocketSummary() },
        ...data
    };
}