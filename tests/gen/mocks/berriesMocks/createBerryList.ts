import { faker } from "@faker-js/faker";
import { createPaginatedBerrySummaryList } from "../createPaginatedBerrySummaryList";
import type { BerryListQueryParamsType, BerryList200Type, BerryListQueryResponseType } from "../../ts/BerryListType";


export function createBerryListQueryParams(): NonNullable<BerryListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createBerryList200(): NonNullable<BerryList200Type> {
    faker.seed([100]);
    return createPaginatedBerrySummaryList();
}


export function createBerryListQueryResponse(): NonNullable<BerryListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedBerrySummaryList();
}