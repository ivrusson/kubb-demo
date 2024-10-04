import { faker } from "@faker-js/faker";
import { createPaginatedCharacteristicSummaryList } from "../createPaginatedCharacteristicSummaryList";
import type { CharacteristicListQueryParamsType, CharacteristicList200Type, CharacteristicListQueryResponseType } from "../../ts/CharacteristicListType";


export function createCharacteristicListQueryParams(): NonNullable<CharacteristicListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createCharacteristicList200(): NonNullable<CharacteristicList200Type> {
    faker.seed([100]);
    return createPaginatedCharacteristicSummaryList();
}


export function createCharacteristicListQueryResponse(): NonNullable<CharacteristicListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedCharacteristicSummaryList();
}