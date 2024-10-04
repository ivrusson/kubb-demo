import { faker } from "@faker-js/faker";
import { createPaginatedItemAttributeSummaryList } from "../createPaginatedItemAttributeSummaryList";
import type { ItemAttributeListQueryParamsType, ItemAttributeList200Type, ItemAttributeListQueryResponseType } from "../../ts/ItemAttributeListType";


export function createItemAttributeListQueryParams(): NonNullable<ItemAttributeListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createItemAttributeList200(): NonNullable<ItemAttributeList200Type> {
    faker.seed([100]);
    return createPaginatedItemAttributeSummaryList();
}


export function createItemAttributeListQueryResponse(): NonNullable<ItemAttributeListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedItemAttributeSummaryList();
}