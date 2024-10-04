import { createContestTypeSummary } from "./createContestTypeSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedContestTypeSummaryListType } from "../ts/PaginatedContestTypeSummaryListType";


export function createPaginatedContestTypeSummaryList(data: NonNullable<Partial<PaginatedContestTypeSummaryListType>> = {}): NonNullable<PaginatedContestTypeSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createContestTypeSummary()]) as any },
        ...data
    };
}