import { createLocationSummary } from "./createLocationSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedLocationSummaryListType } from "../ts/PaginatedLocationSummaryListType";


export function createPaginatedLocationSummaryList(data: NonNullable<Partial<PaginatedLocationSummaryListType>> = {}): NonNullable<PaginatedLocationSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createLocationSummary()]) as any },
        ...data
    };
}