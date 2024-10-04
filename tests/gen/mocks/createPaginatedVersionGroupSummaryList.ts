import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedVersionGroupSummaryListType } from "../ts/PaginatedVersionGroupSummaryListType";


export function createPaginatedVersionGroupSummaryList(data: NonNullable<Partial<PaginatedVersionGroupSummaryListType>> = {}): NonNullable<PaginatedVersionGroupSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createVersionGroupSummary()]) as any },
        ...data
    };
}