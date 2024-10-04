import { faker } from "@faker-js/faker";
import { createPokemonDetail } from "../createPokemonDetail";
import type { PokemonRetrievePathParamsType, PokemonRetrieve200Type, PokemonRetrieveQueryResponseType } from "../../ts/PokemonRetrieveType";


export function createPokemonRetrievePathParams(): NonNullable<PokemonRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonRetrieve200(): NonNullable<PokemonRetrieve200Type> {
    faker.seed([100]);
    return createPokemonDetail();
}


export function createPokemonRetrieveQueryResponse(): NonNullable<PokemonRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonDetail();
}