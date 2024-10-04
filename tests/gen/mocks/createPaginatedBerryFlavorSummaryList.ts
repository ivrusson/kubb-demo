import { createBerryFlavorSummary } from "./createBerryFlavorSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedBerryFlavorSummaryListType } from "../ts/PaginatedBerryFlavorSummaryListType";


export function createPaginatedBerryFlavorSummaryList(data: NonNullable<Partial<PaginatedBerryFlavorSummaryListType>> = {}): NonNullable<PaginatedBerryFlavorSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createBerryFlavorSummary()]) as any },
        ...data
    };
}