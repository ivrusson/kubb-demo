import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedLanguageSummaryListType } from "../ts/PaginatedLanguageSummaryListType";


export function createPaginatedLanguageSummaryList(data: NonNullable<Partial<PaginatedLanguageSummaryListType>> = {}): NonNullable<PaginatedLanguageSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createLanguageSummary()]) as any },
        ...data
    };
}