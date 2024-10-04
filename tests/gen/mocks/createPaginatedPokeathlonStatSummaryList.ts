import { createPokeathlonStatSummary } from "./createPokeathlonStatSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokeathlonStatSummaryListType } from "../ts/PaginatedPokeathlonStatSummaryListType";


export function createPaginatedPokeathlonStatSummaryList(data: NonNullable<Partial<PaginatedPokeathlonStatSummaryListType>> = {}): NonNullable<PaginatedPokeathlonStatSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokeathlonStatSummary()]) as any },
        ...data
    };
}