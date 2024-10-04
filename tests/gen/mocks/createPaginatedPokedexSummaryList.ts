import { createPokedexSummary } from "./createPokedexSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokedexSummaryListType } from "../ts/PaginatedPokedexSummaryListType";


export function createPaginatedPokedexSummaryList(data: NonNullable<Partial<PaginatedPokedexSummaryListType>> = {}): NonNullable<PaginatedPokedexSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokedexSummary()]) as any },
        ...data
    };
}