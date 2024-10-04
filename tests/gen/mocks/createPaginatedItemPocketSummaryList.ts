import { createItemPocketSummary } from "./createItemPocketSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedItemPocketSummaryListType } from "../ts/PaginatedItemPocketSummaryListType";


export function createPaginatedItemPocketSummaryList(data: NonNullable<Partial<PaginatedItemPocketSummaryListType>> = {}): NonNullable<PaginatedItemPocketSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createItemPocketSummary()]) as any },
        ...data
    };
}