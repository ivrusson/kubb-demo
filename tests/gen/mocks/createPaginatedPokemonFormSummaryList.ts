import { createPokemonFormSummary } from "./createPokemonFormSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonFormSummaryListType } from "../ts/PaginatedPokemonFormSummaryListType";


export function createPaginatedPokemonFormSummaryList(data: NonNullable<Partial<PaginatedPokemonFormSummaryListType>> = {}): NonNullable<PaginatedPokemonFormSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonFormSummary()]) as any },
        ...data
    };
}