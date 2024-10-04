import { faker } from "@faker-js/faker";
import { createPokemonColorDetail } from "../createPokemonColorDetail";
import type { PokemonColorRetrievePathParamsType, PokemonColorRetrieve200Type, PokemonColorRetrieveQueryResponseType } from "../../ts/PokemonColorRetrieveType";


export function createPokemonColorRetrievePathParams(): NonNullable<PokemonColorRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonColorRetrieve200(): NonNullable<PokemonColorRetrieve200Type> {
    faker.seed([100]);
    return createPokemonColorDetail();
}


export function createPokemonColorRetrieveQueryResponse(): NonNullable<PokemonColorRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonColorDetail();
}