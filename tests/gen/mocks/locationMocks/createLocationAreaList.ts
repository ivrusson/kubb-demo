import { faker } from "@faker-js/faker";
import { createPaginatedLocationAreaSummaryList } from "../createPaginatedLocationAreaSummaryList";
import type { LocationAreaListQueryParamsType, LocationAreaList200Type, LocationAreaListQueryResponseType } from "../../ts/LocationAreaListType";


export function createLocationAreaListQueryParams(): NonNullable<LocationAreaListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int() };
}


export function createLocationAreaList200(): NonNullable<LocationAreaList200Type> {
    faker.seed([100]);
    return createPaginatedLocationAreaSummaryList();
}


export function createLocationAreaListQueryResponse(): NonNullable<LocationAreaListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedLocationAreaSummaryList();
}