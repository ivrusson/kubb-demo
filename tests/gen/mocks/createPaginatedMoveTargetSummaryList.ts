import { createMoveTargetSummary } from "./createMoveTargetSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveTargetSummaryListType } from "../ts/PaginatedMoveTargetSummaryListType";


export function createPaginatedMoveTargetSummaryList(data: NonNullable<Partial<PaginatedMoveTargetSummaryListType>> = {}): NonNullable<PaginatedMoveTargetSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveTargetSummary()]) as any },
        ...data
    };
}