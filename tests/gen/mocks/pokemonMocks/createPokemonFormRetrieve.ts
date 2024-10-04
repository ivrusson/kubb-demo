import { faker } from "@faker-js/faker";
import { createPokemonFormDetail } from "../createPokemonFormDetail";
import type { PokemonFormRetrievePathParamsType, PokemonFormRetrieve200Type, PokemonFormRetrieveQueryResponseType } from "../../ts/PokemonFormRetrieveType";


export function createPokemonFormRetrievePathParams(): NonNullable<PokemonFormRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonFormRetrieve200(): NonNullable<PokemonFormRetrieve200Type> {
    faker.seed([100]);
    return createPokemonFormDetail();
}


export function createPokemonFormRetrieveQueryResponse(): NonNullable<PokemonFormRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonFormDetail();
}