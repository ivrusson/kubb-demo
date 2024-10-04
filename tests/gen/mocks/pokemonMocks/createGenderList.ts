import { faker } from "@faker-js/faker";
import { createPaginatedGenderSummaryList } from "../createPaginatedGenderSummaryList";
import type { GenderListQueryParamsType, GenderList200Type, GenderListQueryResponseType } from "../../ts/GenderListType";


export function createGenderListQueryParams(): NonNullable<GenderListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createGenderList200(): NonNullable<GenderList200Type> {
    faker.seed([100]);
    return createPaginatedGenderSummaryList();
}


export function createGenderListQueryResponse(): NonNullable<GenderListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedGenderSummaryList();
}