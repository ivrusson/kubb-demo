import { faker } from "@faker-js/faker";
import type { ItemCategorySummaryType } from "../ts/ItemCategorySummaryType";


export function createItemCategorySummary(data: NonNullable<Partial<ItemCategorySummaryType>> = {}): NonNullable<ItemCategorySummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}