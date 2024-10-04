import { createMoveBattleStyleSummary } from "./createMoveBattleStyleSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveBattleStyleSummaryListType } from "../ts/PaginatedMoveBattleStyleSummaryListType";


export function createPaginatedMoveBattleStyleSummaryList(data: NonNullable<Partial<PaginatedMoveBattleStyleSummaryListType>> = {}): NonNullable<PaginatedMoveBattleStyleSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveBattleStyleSummary()]) as any },
        ...data
    };
}