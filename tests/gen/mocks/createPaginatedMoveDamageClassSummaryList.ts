import { createMoveDamageClassSummary } from "./createMoveDamageClassSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveDamageClassSummaryListType } from "../ts/PaginatedMoveDamageClassSummaryListType";


export function createPaginatedMoveDamageClassSummaryList(data: NonNullable<Partial<PaginatedMoveDamageClassSummaryListType>> = {}): NonNullable<PaginatedMoveDamageClassSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveDamageClassSummary()]) as any },
        ...data
    };
}