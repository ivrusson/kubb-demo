import { faker } from "@faker-js/faker";
import type { ItemPocketSummaryType } from "../ts/ItemPocketSummaryType";


export function createItemPocketSummary(data: NonNullable<Partial<ItemPocketSummaryType>> = {}): NonNullable<ItemPocketSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}