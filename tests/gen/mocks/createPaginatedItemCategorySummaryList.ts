import { createItemCategorySummary } from "./createItemCategorySummary";
import { faker } from "@faker-js/faker";
import type { PaginatedItemCategorySummaryListType } from "../ts/PaginatedItemCategorySummaryListType";


export function createPaginatedItemCategorySummaryList(data: NonNullable<Partial<PaginatedItemCategorySummaryListType>> = {}): NonNullable<PaginatedItemCategorySummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createItemCategorySummary()]) as any },
        ...data
    };
}