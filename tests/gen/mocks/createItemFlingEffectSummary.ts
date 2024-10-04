import { faker } from "@faker-js/faker";
import type { ItemFlingEffectSummaryType } from "../ts/ItemFlingEffectSummaryType";


export function createItemFlingEffectSummary(data: NonNullable<Partial<ItemFlingEffectSummaryType>> = {}): NonNullable<ItemFlingEffectSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}