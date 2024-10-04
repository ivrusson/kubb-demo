import { createPokemonHabitatSummary } from "./createPokemonHabitatSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonHabitatSummaryListType } from "../ts/PaginatedPokemonHabitatSummaryListType";


export function createPaginatedPokemonHabitatSummaryList(data: NonNullable<Partial<PaginatedPokemonHabitatSummaryListType>> = {}): NonNullable<PaginatedPokemonHabitatSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonHabitatSummary()]) as any },
        ...data
    };
}