import { faker } from "@faker-js/faker";
import { createPaginatedTypeSummaryList } from "../createPaginatedTypeSummaryList";
import type { TypeListQueryParamsType, TypeList200Type, TypeListQueryResponseType } from "../../ts/TypeListType";


export function createTypeListQueryParams(): NonNullable<TypeListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createTypeList200(): NonNullable<TypeList200Type> {
    faker.seed([100]);
    return createPaginatedTypeSummaryList();
}


export function createTypeListQueryResponse(): NonNullable<TypeListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedTypeSummaryList();
}