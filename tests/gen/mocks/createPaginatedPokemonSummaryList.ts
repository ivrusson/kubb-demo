import { createPokemonSummary } from "./createPokemonSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonSummaryListType } from "../ts/PaginatedPokemonSummaryListType";


export function createPaginatedPokemonSummaryList(data: NonNullable<Partial<PaginatedPokemonSummaryListType>> = {}): NonNullable<PaginatedPokemonSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonSummary()]) as any },
        ...data
    };
}