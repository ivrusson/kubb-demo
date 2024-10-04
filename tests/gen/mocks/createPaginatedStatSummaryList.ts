import { createStatSummary } from "./createStatSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedStatSummaryListType } from "../ts/PaginatedStatSummaryListType";


export function createPaginatedStatSummaryList(data: NonNullable<Partial<PaginatedStatSummaryListType>> = {}): NonNullable<PaginatedStatSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createStatSummary()]) as any },
        ...data
    };
}