import { createMoveSummary } from "./createMoveSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveSummaryListType } from "../ts/PaginatedMoveSummaryListType";


export function createPaginatedMoveSummaryList(data: NonNullable<Partial<PaginatedMoveSummaryListType>> = {}): NonNullable<PaginatedMoveSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveSummary()]) as any },
        ...data
    };
}