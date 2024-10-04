import { createBerryFirmnessSummary } from "./createBerryFirmnessSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedBerryFirmnessSummaryListType } from "../ts/PaginatedBerryFirmnessSummaryListType";


export function createPaginatedBerryFirmnessSummaryList(data: NonNullable<Partial<PaginatedBerryFirmnessSummaryListType>> = {}): NonNullable<PaginatedBerryFirmnessSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createBerryFirmnessSummary()]) as any },
        ...data
    };
}