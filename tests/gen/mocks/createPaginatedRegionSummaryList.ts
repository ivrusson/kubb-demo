import { createRegionSummary } from "./createRegionSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedRegionSummaryListType } from "../ts/PaginatedRegionSummaryListType";


export function createPaginatedRegionSummaryList(data: NonNullable<Partial<PaginatedRegionSummaryListType>> = {}): NonNullable<PaginatedRegionSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createRegionSummary()]) as any },
        ...data
    };
}