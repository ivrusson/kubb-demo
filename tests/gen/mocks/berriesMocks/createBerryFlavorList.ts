import { faker } from "@faker-js/faker";
import { createPaginatedBerryFlavorSummaryList } from "../createPaginatedBerryFlavorSummaryList";
import type { BerryFlavorListQueryParamsType, BerryFlavorList200Type, BerryFlavorListQueryResponseType } from "../../ts/BerryFlavorListType";


export function createBerryFlavorListQueryParams(): NonNullable<BerryFlavorListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createBerryFlavorList200(): NonNullable<BerryFlavorList200Type> {
    faker.seed([100]);
    return createPaginatedBerryFlavorSummaryList();
}


export function createBerryFlavorListQueryResponse(): NonNullable<BerryFlavorListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedBerryFlavorSummaryList();
}