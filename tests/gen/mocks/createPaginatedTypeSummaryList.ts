import { createTypeSummary } from "./createTypeSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedTypeSummaryListType } from "../ts/PaginatedTypeSummaryListType";


export function createPaginatedTypeSummaryList(data: NonNullable<Partial<PaginatedTypeSummaryListType>> = {}): NonNullable<PaginatedTypeSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createTypeSummary()]) as any },
        ...data
    };
}