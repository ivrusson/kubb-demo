import { faker } from "@faker-js/faker";
import { createPaginatedRegionSummaryList } from "../createPaginatedRegionSummaryList";
import type { RegionListQueryParamsType, RegionList200Type, RegionListQueryResponseType } from "../../ts/RegionListType";


export function createRegionListQueryParams(): NonNullable<RegionListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createRegionList200(): NonNullable<RegionList200Type> {
    faker.seed([100]);
    return createPaginatedRegionSummaryList();
}


export function createRegionListQueryResponse(): NonNullable<RegionListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedRegionSummaryList();
}