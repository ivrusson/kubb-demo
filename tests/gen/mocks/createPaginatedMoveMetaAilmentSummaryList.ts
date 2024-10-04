import { createMoveMetaAilmentSummary } from "./createMoveMetaAilmentSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMoveMetaAilmentSummaryListType } from "../ts/PaginatedMoveMetaAilmentSummaryListType";


export function createPaginatedMoveMetaAilmentSummaryList(data: NonNullable<Partial<PaginatedMoveMetaAilmentSummaryListType>> = {}): NonNullable<PaginatedMoveMetaAilmentSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMoveMetaAilmentSummary()]) as any },
        ...data
    };
}