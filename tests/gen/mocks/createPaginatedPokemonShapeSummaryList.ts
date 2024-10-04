import { createPokemonShapeSummary } from "./createPokemonShapeSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedPokemonShapeSummaryListType } from "../ts/PaginatedPokemonShapeSummaryListType";


export function createPaginatedPokemonShapeSummaryList(data: NonNullable<Partial<PaginatedPokemonShapeSummaryListType>> = {}): NonNullable<PaginatedPokemonShapeSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createPokemonShapeSummary()]) as any },
        ...data
    };
}