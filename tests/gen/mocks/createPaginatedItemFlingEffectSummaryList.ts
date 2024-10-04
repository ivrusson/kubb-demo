import { createItemFlingEffectSummary } from "./createItemFlingEffectSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedItemFlingEffectSummaryListType } from "../ts/PaginatedItemFlingEffectSummaryListType";


export function createPaginatedItemFlingEffectSummaryList(data: NonNullable<Partial<PaginatedItemFlingEffectSummaryListType>> = {}): NonNullable<PaginatedItemFlingEffectSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createItemFlingEffectSummary()]) as any },
        ...data
    };
}