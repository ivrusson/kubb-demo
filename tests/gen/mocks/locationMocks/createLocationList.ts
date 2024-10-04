import { faker } from "@faker-js/faker";
import { createPaginatedLocationSummaryList } from "../createPaginatedLocationSummaryList";
import type { LocationListQueryParamsType, LocationList200Type, LocationListQueryResponseType } from "../../ts/LocationListType";


export function createLocationListQueryParams(): NonNullable<LocationListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createLocationList200(): NonNullable<LocationList200Type> {
    faker.seed([100]);
    return createPaginatedLocationSummaryList();
}


export function createLocationListQueryResponse(): NonNullable<LocationListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedLocationSummaryList();
}