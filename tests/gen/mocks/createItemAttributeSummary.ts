import { faker } from "@faker-js/faker";
import type { ItemAttributeSummaryType } from "../ts/ItemAttributeSummaryType";


export function createItemAttributeSummary(data: NonNullable<Partial<ItemAttributeSummaryType>> = {}): NonNullable<ItemAttributeSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}