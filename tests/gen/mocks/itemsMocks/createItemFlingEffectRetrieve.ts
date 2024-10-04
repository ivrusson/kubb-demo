import { faker } from "@faker-js/faker";
import { createItemFlingEffectDetail } from "../createItemFlingEffectDetail";
import type { ItemFlingEffectRetrievePathParamsType, ItemFlingEffectRetrieve200Type, ItemFlingEffectRetrieveQueryResponseType } from "../../ts/ItemFlingEffectRetrieveType";


export function createItemFlingEffectRetrievePathParams(): NonNullable<ItemFlingEffectRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createItemFlingEffectRetrieve200(): NonNullable<ItemFlingEffectRetrieve200Type> {
    faker.seed([100]);
    return createItemFlingEffectDetail();
}


export function createItemFlingEffectRetrieveQueryResponse(): NonNullable<ItemFlingEffectRetrieveQueryResponseType> {
    faker.seed([100]);
    return createItemFlingEffectDetail();
}