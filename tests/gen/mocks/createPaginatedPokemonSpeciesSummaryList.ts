import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonSpeciesSummaryListType } from "../ts/PaginatedPokemonSpeciesSummaryListType";


export function createPaginatedPokemonSpeciesSummaryList(data: NonNullable<Partial<PaginatedPokemonSpeciesSummaryListType>> = {}): NonNullable<PaginatedPokemonSpeciesSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any },
        ...data
    };
}