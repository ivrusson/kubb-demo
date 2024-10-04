import { createSuperContestEffectSummary } from "./createSuperContestEffectSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedSuperContestEffectSummaryListType } from "../ts/PaginatedSuperContestEffectSummaryListType";


export function createPaginatedSuperContestEffectSummaryList(data: NonNullable<Partial<PaginatedSuperContestEffectSummaryListType>> = {}): NonNullable<PaginatedSuperContestEffectSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createSuperContestEffectSummary()]) as any },
        ...data
    };
}