import { faker } from "@faker-js/faker";
import { createNatureDetail } from "../createNatureDetail";
import type { NatureRetrievePathParamsType, NatureRetrieve200Type, NatureRetrieveQueryResponseType } from "../../ts/NatureRetrieveType";


export function createNatureRetrievePathParams(): NonNullable<NatureRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createNatureRetrieve200(): NonNullable<NatureRetrieve200Type> {
    faker.seed([100]);
    return createNatureDetail();
}


export function createNatureRetrieveQueryResponse(): NonNullable<NatureRetrieveQueryResponseType> {
    faker.seed([100]);
    return createNatureDetail();
}