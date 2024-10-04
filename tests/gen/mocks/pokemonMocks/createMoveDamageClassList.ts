import { faker } from "@faker-js/faker";
import { createPaginatedMoveDamageClassSummaryList } from "../createPaginatedMoveDamageClassSummaryList";
import type { MoveDamageClassListQueryParamsType, MoveDamageClassList200Type, MoveDamageClassListQueryResponseType } from "../../ts/MoveDamageClassListType";


export function createMoveDamageClassListQueryParams(): NonNullable<MoveDamageClassListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveDamageClassList200(): NonNullable<MoveDamageClassList200Type> {
    faker.seed([100]);
    return createPaginatedMoveDamageClassSummaryList();
}


export function createMoveDamageClassListQueryResponse(): NonNullable<MoveDamageClassListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveDamageClassSummaryList();
}