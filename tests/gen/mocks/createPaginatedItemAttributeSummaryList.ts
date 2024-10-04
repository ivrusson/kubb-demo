import { createItemAttributeSummary } from "./createItemAttributeSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedItemAttributeSummaryListType } from "../ts/PaginatedItemAttributeSummaryListType";


export function createPaginatedItemAttributeSummaryList(data: NonNullable<Partial<PaginatedItemAttributeSummaryListType>> = {}): NonNullable<PaginatedItemAttributeSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createItemAttributeSummary()]) as any },
        ...data
    };
}