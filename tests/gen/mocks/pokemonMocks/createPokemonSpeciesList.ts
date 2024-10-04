import { faker } from "@faker-js/faker";
import { createPaginatedPokemonSpeciesSummaryList } from "../createPaginatedPokemonSpeciesSummaryList";
import type { PokemonSpeciesListQueryParamsType, PokemonSpeciesList200Type, PokemonSpeciesListQueryResponseType } from "../../ts/PokemonSpeciesListType";


export function createPokemonSpeciesListQueryParams(): NonNullable<PokemonSpeciesListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonSpeciesList200(): NonNullable<PokemonSpeciesList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonSpeciesSummaryList();
}


export function createPokemonSpeciesListQueryResponse(): NonNullable<PokemonSpeciesListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonSpeciesSummaryList();
}