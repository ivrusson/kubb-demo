import { createCharacteristicSummary } from "./createCharacteristicSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedCharacteristicSummaryListType } from "../ts/PaginatedCharacteristicSummaryListType";


export function createPaginatedCharacteristicSummaryList(data: NonNullable<Partial<PaginatedCharacteristicSummaryListType>> = {}): NonNullable<PaginatedCharacteristicSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createCharacteristicSummary()]) as any },
        ...data
    };
}