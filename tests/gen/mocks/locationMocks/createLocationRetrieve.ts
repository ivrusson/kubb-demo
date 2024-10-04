import { faker } from "@faker-js/faker";
import { createLocationDetail } from "../createLocationDetail";
import type { LocationRetrievePathParamsType, LocationRetrieve200Type, LocationRetrieveQueryResponseType } from "../../ts/LocationRetrieveType";


export function createLocationRetrievePathParams(): NonNullable<LocationRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createLocationRetrieve200(): NonNullable<LocationRetrieve200Type> {
    faker.seed([100]);
    return createLocationDetail();
}


export function createLocationRetrieveQueryResponse(): NonNullable<LocationRetrieveQueryResponseType> {
    faker.seed([100]);
    return createLocationDetail();
}