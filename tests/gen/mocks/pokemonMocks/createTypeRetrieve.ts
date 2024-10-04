import { faker } from "@faker-js/faker";
import { createTypeDetail } from "../createTypeDetail";
import type { TypeRetrievePathParamsType, TypeRetrieve200Type, TypeRetrieveQueryResponseType } from "../../ts/TypeRetrieveType";


export function createTypeRetrievePathParams(): NonNullable<TypeRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createTypeRetrieve200(): NonNullable<TypeRetrieve200Type> {
    faker.seed([100]);
    return createTypeDetail();
}


export function createTypeRetrieveQueryResponse(): NonNullable<TypeRetrieveQueryResponseType> {
    faker.seed([100]);
    return createTypeDetail();
}