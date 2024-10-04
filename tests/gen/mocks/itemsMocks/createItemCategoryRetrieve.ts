import { faker } from "@faker-js/faker";
import { createItemCategoryDetail } from "../createItemCategoryDetail";
import type { ItemCategoryRetrievePathParamsType, ItemCategoryRetrieve200Type, ItemCategoryRetrieveQueryResponseType } from "../../ts/ItemCategoryRetrieveType";


export function createItemCategoryRetrievePathParams(): NonNullable<ItemCategoryRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createItemCategoryRetrieve200(): NonNullable<ItemCategoryRetrieve200Type> {
    faker.seed([100]);
    return createItemCategoryDetail();
}


export function createItemCategoryRetrieveQueryResponse(): NonNullable<ItemCategoryRetrieveQueryResponseType> {
    faker.seed([100]);
    return createItemCategoryDetail();
}