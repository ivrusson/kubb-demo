import { createMoveMetaCategorySummary } from "./createMoveMetaCategorySummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveMetaCategorySummaryListType } from "../ts/PaginatedMoveMetaCategorySummaryListType";


export function createPaginatedMoveMetaCategorySummaryList(data: NonNullable<Partial<PaginatedMoveMetaCategorySummaryListType>> = {}): NonNullable<PaginatedMoveMetaCategorySummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveMetaCategorySummary()]) as any },
        ...data
    };
}