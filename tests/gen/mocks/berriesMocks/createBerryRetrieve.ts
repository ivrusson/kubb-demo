import { faker } from "@faker-js/faker";
import { createBerryDetail } from "../createBerryDetail";
import type { BerryRetrievePathParamsType, BerryRetrieve200Type, BerryRetrieveQueryResponseType } from "../../ts/BerryRetrieveType";


export function createBerryRetrievePathParams(): NonNullable<BerryRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createBerryRetrieve200(): NonNullable<BerryRetrieve200Type> {
    faker.seed([100]);
    return createBerryDetail();
}


export function createBerryRetrieveQueryResponse(): NonNullable<BerryRetrieveQueryResponseType> {
    faker.seed([100]);
    return createBerryDetail();
}