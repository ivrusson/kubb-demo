import { createNatureSummary } from "./createNatureSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedNatureSummaryListType } from "../ts/PaginatedNatureSummaryListType";


export function createPaginatedNatureSummaryList(data: NonNullable<Partial<PaginatedNatureSummaryListType>> = {}): NonNullable<PaginatedNatureSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createNatureSummary()]) as any },
        ...data
    };
}