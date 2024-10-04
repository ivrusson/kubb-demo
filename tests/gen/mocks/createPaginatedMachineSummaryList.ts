import { createMachineSummary } from "./createMachineSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedMachineSummaryListType } from "../ts/PaginatedMachineSummaryListType";


export function createPaginatedMachineSummaryList(data: NonNullable<Partial<PaginatedMachineSummaryListType>> = {}): NonNullable<PaginatedMachineSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createMachineSummary()]) as any },
        ...data
    };
}