import { faker } from "@faker-js/faker";
import { createMoveDamageClassDetail } from "../createMoveDamageClassDetail";
import type { MoveDamageClassRetrievePathParamsType, MoveDamageClassRetrieve200Type, MoveDamageClassRetrieveQueryResponseType } from "../../ts/MoveDamageClassRetrieveType";


export function createMoveDamageClassRetrievePathParams(): NonNullable<MoveDamageClassRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveDamageClassRetrieve200(): NonNullable<MoveDamageClassRetrieve200Type> {
    faker.seed([100]);
    return createMoveDamageClassDetail();
}


export function createMoveDamageClassRetrieveQueryResponse(): NonNullable<MoveDamageClassRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveDamageClassDetail();
}