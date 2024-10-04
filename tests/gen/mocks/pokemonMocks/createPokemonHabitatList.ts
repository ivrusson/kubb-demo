import { faker } from "@faker-js/faker";
import { createPaginatedPokemonHabitatSummaryList } from "../createPaginatedPokemonHabitatSummaryList";
import type { PokemonHabitatListQueryParamsType, PokemonHabitatList200Type, PokemonHabitatListQueryResponseType } from "../../ts/PokemonHabitatListType";


export function createPokemonHabitatListQueryParams(): NonNullable<PokemonHabitatListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonHabitatList200(): NonNullable<PokemonHabitatList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonHabitatSummaryList();
}


export function createPokemonHabitatListQueryResponse(): NonNullable<PokemonHabitatListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonHabitatSummaryList();
}