import { faker } from "@faker-js/faker";
import { createMoveMetaCategoryDetail } from "../createMoveMetaCategoryDetail";
import type { MoveCategoryRetrievePathParamsType, MoveCategoryRetrieve200Type, MoveCategoryRetrieveQueryResponseType } from "../../ts/MoveCategoryRetrieveType";


export function createMoveCategoryRetrievePathParams(): NonNullable<MoveCategoryRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveCategoryRetrieve200(): NonNullable<MoveCategoryRetrieve200Type> {
    faker.seed([100]);
    return createMoveMetaCategoryDetail();
}


export function createMoveCategoryRetrieveQueryResponse(): NonNullable<MoveCategoryRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveMetaCategoryDetail();
}