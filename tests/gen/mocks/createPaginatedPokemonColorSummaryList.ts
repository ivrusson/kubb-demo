import { createPokemonColorSummary } from "./createPokemonColorSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonColorSummaryListType } from "../ts/PaginatedPokemonColorSummaryListType";


export function createPaginatedPokemonColorSummaryList(data: NonNullable<Partial<PaginatedPokemonColorSummaryListType>> = {}): NonNullable<PaginatedPokemonColorSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonColorSummary()]) as any },
        ...data
    };
}