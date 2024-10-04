import { faker } from "@faker-js/faker";
import { createPokemonShapeDetail } from "../createPokemonShapeDetail";
import type { PokemonShapeRetrievePathParamsType, PokemonShapeRetrieve200Type, PokemonShapeRetrieveQueryResponseType } from "../../ts/PokemonShapeRetrieveType";


export function createPokemonShapeRetrievePathParams(): NonNullable<PokemonShapeRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokemonShapeRetrieve200(): NonNullable<PokemonShapeRetrieve200Type> {
    faker.seed([100]);
    return createPokemonShapeDetail();
}


export function createPokemonShapeRetrieveQueryResponse(): NonNullable<PokemonShapeRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokemonShapeDetail();
}