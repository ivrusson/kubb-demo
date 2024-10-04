import { faker } from "@faker-js/faker";
import type { ItemSummaryType } from "../ts/ItemSummaryType";


export function createItemSummary(data: NonNullable<Partial<ItemSummaryType>> = {}): NonNullable<ItemSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}