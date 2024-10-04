import { createBerrySummary } from "./createBerrySummary";
import { faker } from "@faker-js/faker";
import type { PaginatedBerrySummaryListType } from "../ts/PaginatedBerrySummaryListType";


export function createPaginatedBerrySummaryList(data: NonNullable<Partial<PaginatedBerrySummaryListType>> = {}): NonNullable<PaginatedBerrySummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createBerrySummary()]) as any },
        ...data
    };
}