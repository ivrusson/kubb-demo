import { faker } from "@faker-js/faker";
import { createPokemonSpeciesDetail } from "../createPokemonSpeciesDetail";
import type { PokemonSpeciesRetrievePathParamsType, PokemonSpeciesRetrieve200Type, PokemonSpeciesRetrieveQueryResponseType } from "../../ts/PokemonSpeciesRetrieveType";


export function createPokemonSpeciesRetrievePathParams(): NonNullable<PokemonSpeciesRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonSpeciesRetrieve200(): NonNullable<PokemonSpeciesRetrieve200Type> {
    faker.seed([100]);
    return createPokemonSpeciesDetail();
}


export function createPokemonSpeciesRetrieveQueryResponse(): NonNullable<PokemonSpeciesRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonSpeciesDetail();
}