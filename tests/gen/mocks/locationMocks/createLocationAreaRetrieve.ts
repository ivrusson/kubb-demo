import { faker } from "@faker-js/faker";
import { createLocationAreaDetail } from "../createLocationAreaDetail";
import type { LocationAreaRetrievePathParamsType, LocationAreaRetrieve200Type, LocationAreaRetrieveQueryResponseType } from "../../ts/LocationAreaRetrieveType";


export function createLocationAreaRetrievePathParams(): NonNullable<LocationAreaRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.number.int() };
}


export function createLocationAreaRetrieve200(): NonNullable<LocationAreaRetrieve200Type> {
    faker.seed([100]);
    return createLocationAreaDetail();
}


export function createLocationAreaRetrieveQueryResponse(): NonNullable<LocationAreaRetrieveQueryResponseType> {
    faker.seed([100]);
    return createLocationAreaDetail();
}