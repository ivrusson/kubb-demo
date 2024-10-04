import { createLocationAreaSummary } from "./createLocationAreaSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedLocationAreaSummaryListType } from "../ts/PaginatedLocationAreaSummaryListType";


export function createPaginatedLocationAreaSummaryList(data: NonNullable<Partial<PaginatedLocationAreaSummaryListType>> = {}): NonNullable<PaginatedLocationAreaSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createLocationAreaSummary()]) as any },
        ...data
    };
}