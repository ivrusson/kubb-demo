import { faker } from "@faker-js/faker";
import { createPaginatedPokemonFormSummaryList } from "../createPaginatedPokemonFormSummaryList";
import type { PokemonFormListQueryParamsType, PokemonFormList200Type, PokemonFormListQueryResponseType } from "../../ts/PokemonFormListType";


export function createPokemonFormListQueryParams(): NonNullable<PokemonFormListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonFormList200(): NonNullable<PokemonFormList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonFormSummaryList();
}


export function createPokemonFormListQueryResponse(): NonNullable<PokemonFormListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonFormSummaryList();
}