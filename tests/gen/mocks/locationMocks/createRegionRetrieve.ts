import { faker } from "@faker-js/faker";
import { createRegionDetail } from "../createRegionDetail";
import type { RegionRetrievePathParamsType, RegionRetrieve200Type, RegionRetrieveQueryResponseType } from "../../ts/RegionRetrieveType";


export function createRegionRetrievePathParams(): NonNullable<RegionRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createRegionRetrieve200(): NonNullable<RegionRetrieve200Type> {
    faker.seed([100]);
    return createRegionDetail();
}


export function createRegionRetrieveQueryResponse(): NonNullable<RegionRetrieveQueryResponseType> {
    faker.seed([100]);
    return createRegionDetail();
}