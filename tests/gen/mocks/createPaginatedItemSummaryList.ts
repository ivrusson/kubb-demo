import { createItemSummary } from "./createItemSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedItemSummaryListType } from "../ts/PaginatedItemSummaryListType";


export function createPaginatedItemSummaryList(data: NonNullable<Partial<PaginatedItemSummaryListType>> = {}): NonNullable<PaginatedItemSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createItemSummary()]) as any },
        ...data
    };
}