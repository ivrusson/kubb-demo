import { faker } from "@faker-js/faker";
import { createPaginatedItemCategorySummaryList } from "../createPaginatedItemCategorySummaryList";
import type { ItemCategoryListQueryParamsType, ItemCategoryList200Type, ItemCategoryListQueryResponseType } from "../../ts/ItemCategoryListType";


export function createItemCategoryListQueryParams(): NonNullable<ItemCategoryListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createItemCategoryList200(): NonNullable<ItemCategoryList200Type> {
    faker.seed([100]);
    return createPaginatedItemCategorySummaryList();
}


export function createItemCategoryListQueryResponse(): NonNullable<ItemCategoryListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedItemCategorySummaryList();
}