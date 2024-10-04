import { createPalParkAreaSummary } from "./createPalParkAreaSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPalParkAreaSummaryListType } from "../ts/PaginatedPalParkAreaSummaryListType";


export function createPaginatedPalParkAreaSummaryList(data: NonNullable<Partial<PaginatedPalParkAreaSummaryListType>> = {}): NonNullable<PaginatedPalParkAreaSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPalParkAreaSummary()]) as any },
        ...data
    };
}