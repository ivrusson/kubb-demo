import { createGrowthRateSummary } from "./createGrowthRateSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedGrowthRateSummaryListType } from "../ts/PaginatedGrowthRateSummaryListType";


export function createPaginatedGrowthRateSummaryList(data: NonNullable<Partial<PaginatedGrowthRateSummaryListType>> = {}): NonNullable<PaginatedGrowthRateSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createGrowthRateSummary()]) as any },
        ...data
    };
}