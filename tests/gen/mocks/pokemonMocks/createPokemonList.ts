import { faker } from "@faker-js/faker";
import { createPaginatedPokemonSummaryList } from "../createPaginatedPokemonSummaryList";
import type { PokemonListQueryParamsType, PokemonList200Type, PokemonListQueryResponseType } from "../../ts/PokemonListType";


export function createPokemonListQueryParams(): NonNullable<PokemonListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonList200(): NonNullable<PokemonList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonSummaryList();
}


export function createPokemonListQueryResponse(): NonNullable<PokemonListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonSummaryList();
}