import { createContestEffectSummary } from "./createContestEffectSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedContestEffectSummaryListType } from "../ts/PaginatedContestEffectSummaryListType";


export function createPaginatedContestEffectSummaryList(data: NonNullable<Partial<PaginatedContestEffectSummaryListType>> = {}): NonNullable<PaginatedContestEffectSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createContestEffectSummary()]) as any },
        ...data
    };
}