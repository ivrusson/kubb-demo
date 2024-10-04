import { faker } from "@faker-js/faker";
import { createItemAttributeDetail } from "../createItemAttributeDetail";
import type { ItemAttributeRetrievePathParamsType, ItemAttributeRetrieve200Type, ItemAttributeRetrieveQueryResponseType } from "../../ts/ItemAttributeRetrieveType";


export function createItemAttributeRetrievePathParams(): NonNullable<ItemAttributeRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createItemAttributeRetrieve200(): NonNullable<ItemAttributeRetrieve200Type> {
    faker.seed([100]);
    return createItemAttributeDetail();
}


export function createItemAttributeRetrieveQueryResponse(): NonNullable<ItemAttributeRetrieveQueryResponseType> {
    faker.seed([100]);
    return createItemAttributeDetail();
}