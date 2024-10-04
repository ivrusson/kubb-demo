import { createEggGroupSummary } from "./createEggGroupSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedEggGroupSummaryListType } from "../ts/PaginatedEggGroupSummaryListType";


export function createPaginatedEggGroupSummaryList(data: NonNullable<Partial<PaginatedEggGroupSummaryListType>> = {}): NonNullable<PaginatedEggGroupSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createEggGroupSummary()]) as any },
        ...data
    };
}