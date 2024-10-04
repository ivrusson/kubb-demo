import { faker } from "@faker-js/faker";
import { createPokemonHabitatDetail } from "../createPokemonHabitatDetail";
import type { PokemonHabitatRetrievePathParamsType, PokemonHabitatRetrieve200Type, PokemonHabitatRetrieveQueryResponseType } from "../../ts/PokemonHabitatRetrieveType";


export function createPokemonHabitatRetrievePathParams(): NonNullable<PokemonHabitatRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonHabitatRetrieve200(): NonNullable<PokemonHabitatRetrieve200Type> {
    faker.seed([100]);
    return createPokemonHabitatDetail();
}


export function createPokemonHabitatRetrieveQueryResponse(): NonNullable<PokemonHabitatRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonHabitatDetail();
}