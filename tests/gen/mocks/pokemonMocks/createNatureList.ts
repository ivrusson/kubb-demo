import { faker } from "@faker-js/faker";
import { createPaginatedNatureSummaryList } from "../createPaginatedNatureSummaryList";
import type { NatureListQueryParamsType, NatureList200Type, NatureListQueryResponseType } from "../../ts/NatureListType";


export function createNatureListQueryParams(): NonNullable<NatureListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createNatureList200(): NonNullable<NatureList200Type> {
    faker.seed([100]);
    return createPaginatedNatureSummaryList();
}


export function createNatureListQueryResponse(): NonNullable<NatureListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedNatureSummaryList();
}