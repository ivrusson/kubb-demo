import { faker } from "@faker-js/faker";
import { createCharacteristicDetail } from "../createCharacteristicDetail";
import type { CharacteristicRetrievePathParamsType, CharacteristicRetrieve200Type, CharacteristicRetrieveQueryResponseType } from "../../ts/CharacteristicRetrieveType";


export function createCharacteristicRetrievePathParams(): NonNullable<CharacteristicRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createCharacteristicRetrieve200(): NonNullable<CharacteristicRetrieve200Type> {
    faker.seed([100]);
    return createCharacteristicDetail();
}


export function createCharacteristicRetrieveQueryResponse(): NonNullable<CharacteristicRetrieveQueryResponseType> {
    faker.seed([100]);
    return createCharacteristicDetail();
}