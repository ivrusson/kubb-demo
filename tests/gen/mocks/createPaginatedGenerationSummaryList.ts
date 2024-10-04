import { createGenerationSummary } from "./createGenerationSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedGenerationSummaryListType } from "../ts/PaginatedGenerationSummaryListType";


export function createPaginatedGenerationSummaryList(data: NonNullable<Partial<PaginatedGenerationSummaryListType>> = {}): NonNullable<PaginatedGenerationSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createGenerationSummary()]) as any },
        ...data
    };
}