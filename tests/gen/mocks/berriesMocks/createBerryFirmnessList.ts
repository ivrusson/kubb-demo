import { faker } from "@faker-js/faker";
import { createPaginatedBerryFirmnessSummaryList } from "../createPaginatedBerryFirmnessSummaryList";
import type { BerryFirmnessListQueryParamsType, BerryFirmnessList200Type, BerryFirmnessListQueryResponseType } from "../../ts/BerryFirmnessListType";


export function createBerryFirmnessListQueryParams(): NonNullable<BerryFirmnessListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createBerryFirmnessList200(): NonNullable<BerryFirmnessList200Type> {
    faker.seed([100]);
    return createPaginatedBerryFirmnessSummaryList();
}


export function createBerryFirmnessListQueryResponse(): NonNullable<BerryFirmnessListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedBerryFirmnessSummaryList();
}