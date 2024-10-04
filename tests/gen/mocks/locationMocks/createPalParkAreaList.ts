import { faker } from "@faker-js/faker";
import { createPaginatedPalParkAreaSummaryList } from "../createPaginatedPalParkAreaSummaryList";
import type { PalParkAreaListQueryParamsType, PalParkAreaList200Type, PalParkAreaListQueryResponseType } from "../../ts/PalParkAreaListType";


export function createPalParkAreaListQueryParams(): NonNullable<PalParkAreaListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPalParkAreaList200(): NonNullable<PalParkAreaList200Type> {
    faker.seed([100]);
    return createPaginatedPalParkAreaSummaryList();
}


export function createPalParkAreaListQueryResponse(): NonNullable<PalParkAreaListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPalParkAreaSummaryList();
}