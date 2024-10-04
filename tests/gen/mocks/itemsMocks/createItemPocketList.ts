import { faker } from "@faker-js/faker";
import { createPaginatedItemPocketSummaryList } from "../createPaginatedItemPocketSummaryList";
import type { ItemPocketListQueryParamsType, ItemPocketList200Type, ItemPocketListQueryResponseType } from "../../ts/ItemPocketListType";


export function createItemPocketListQueryParams(): NonNullable<ItemPocketListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createItemPocketList200(): NonNullable<ItemPocketList200Type> {
    faker.seed([100]);
    return createPaginatedItemPocketSummaryList();
}


export function createItemPocketListQueryResponse(): NonNullable<ItemPocketListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedItemPocketSummaryList();
}