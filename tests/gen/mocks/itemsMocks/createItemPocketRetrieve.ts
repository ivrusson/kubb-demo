import { faker } from "@faker-js/faker";
import { createItemPocketDetail } from "../createItemPocketDetail";
import type { ItemPocketRetrievePathParamsType, ItemPocketRetrieve200Type, ItemPocketRetrieveQueryResponseType } from "../../ts/ItemPocketRetrieveType";


export function createItemPocketRetrievePathParams(): NonNullable<ItemPocketRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createItemPocketRetrieve200(): NonNullable<ItemPocketRetrieve200Type> {
    faker.seed([100]);
    return createItemPocketDetail();
}


export function createItemPocketRetrieveQueryResponse(): NonNullable<ItemPocketRetrieveQueryResponseType> {
    faker.seed([100]);
    return createItemPocketDetail();
}