import { createMoveLearnMethodSummary } from "./createMoveLearnMethodSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveLearnMethodSummaryListType } from "../ts/PaginatedMoveLearnMethodSummaryListType";


export function createPaginatedMoveLearnMethodSummaryList(data: NonNullable<Partial<PaginatedMoveLearnMethodSummaryListType>> = {}): NonNullable<PaginatedMoveLearnMethodSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveLearnMethodSummary()]) as any },
        ...data
    };
}