import { faker } from "@faker-js/faker";
import { createPaginatedMoveMetaCategorySummaryList } from "../createPaginatedMoveMetaCategorySummaryList";
import type { MoveCategoryListQueryParamsType, MoveCategoryList200Type, MoveCategoryListQueryResponseType } from "../../ts/MoveCategoryListType";


export function createMoveCategoryListQueryParams(): NonNullable<MoveCategoryListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveCategoryList200(): NonNullable<MoveCategoryList200Type> {
    faker.seed([100]);
    return createPaginatedMoveMetaCategorySummaryList();
}


export function createMoveCategoryListQueryResponse(): NonNullable<MoveCategoryListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveMetaCategorySummaryList();
}