import { createGenderSummary } from "./createGenderSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedGenderSummaryListType } from "../ts/PaginatedGenderSummaryListType";


export function createPaginatedGenderSummaryList(data: NonNullable<Partial<PaginatedGenderSummaryListType>> = {}): NonNullable<PaginatedGenderSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createGenderSummary()]) as any },
        ...data
    };
}