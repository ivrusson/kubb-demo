import { faker } from "@faker-js/faker";
import { createItemDetail } from "../createItemDetail";
import type { ItemRetrievePathParamsType, ItemRetrieve200Type, ItemRetrieveQueryResponseType } from "../../ts/ItemRetrieveType";


export function createItemRetrievePathParams(): NonNullable<ItemRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createItemRetrieve200(): NonNullable<ItemRetrieve200Type> {
    faker.seed([100]);
    return createItemDetail();
}


export function createItemRetrieveQueryResponse(): NonNullable<ItemRetrieveQueryResponseType> {
    faker.seed([100]);
    return createItemDetail();
}