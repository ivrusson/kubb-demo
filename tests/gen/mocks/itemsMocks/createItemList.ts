import { faker } from "@faker-js/faker";
import { createPaginatedItemSummaryList } from "../createPaginatedItemSummaryList";
import type { ItemListQueryParamsType, ItemList200Type, ItemListQueryResponseType } from "../../ts/ItemListType";


export function createItemListQueryParams(): NonNullable<ItemListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createItemList200(): NonNullable<ItemList200Type> {
    faker.seed([100]);
    return createPaginatedItemSummaryList();
}


export function createItemListQueryResponse(): NonNullable<ItemListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedItemSummaryList();
}