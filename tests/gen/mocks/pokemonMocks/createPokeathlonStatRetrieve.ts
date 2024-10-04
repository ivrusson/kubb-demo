import { faker } from "@faker-js/faker";
import { createPokeathlonStatDetail } from "../createPokeathlonStatDetail";
import type { PokeathlonStatRetrievePathParamsType, PokeathlonStatRetrieve200Type, PokeathlonStatRetrieveQueryResponseType } from "../../ts/PokeathlonStatRetrieveType";


export function createPokeathlonStatRetrievePathParams(): NonNullable<PokeathlonStatRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokeathlonStatRetrieve200(): NonNullable<PokeathlonStatRetrieve200Type> {
    faker.seed([100]);
    return createPokeathlonStatDetail();
}


export function createPokeathlonStatRetrieveQueryResponse(): NonNullable<PokeathlonStatRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokeathlonStatDetail();
}