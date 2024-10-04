import { createVersionSummary } from "./createVersionSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedVersionSummaryListType } from "../ts/PaginatedVersionSummaryListType";


export function createPaginatedVersionSummaryList(data: NonNullable<Partial<PaginatedVersionSummaryListType>> = {}): NonNullable<PaginatedVersionSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createVersionSummary()]) as any },
        ...data
    };
}