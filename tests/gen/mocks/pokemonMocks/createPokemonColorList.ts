import { faker } from "@faker-js/faker";
import { createPaginatedPokemonColorSummaryList } from "../createPaginatedPokemonColorSummaryList";
import type { PokemonColorListQueryParamsType, PokemonColorList200Type, PokemonColorListQueryResponseType } from "../../ts/PokemonColorListType";


export function createPokemonColorListQueryParams(): NonNullable<PokemonColorListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonColorList200(): NonNullable<PokemonColorList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonColorSummaryList();
}


export function createPokemonColorListQueryResponse(): NonNullable<PokemonColorListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonColorSummaryList();
}