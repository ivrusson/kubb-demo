import { createAbilitySummary } from "./createAbilitySummary";
import { faker } from "@faker-js/faker";
import type { PaginatedAbilitySummaryListType } from "../ts/PaginatedAbilitySummaryListType";


export function createPaginatedAbilitySummaryList(data: NonNullable<Partial<PaginatedAbilitySummaryListType>> = {}): NonNullable<PaginatedAbilitySummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createAbilitySummary()]) as any },
        ...data
    };
}