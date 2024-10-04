import { faker } from "@faker-js/faker";
import { createPaginatedItemFlingEffectSummaryList } from "../createPaginatedItemFlingEffectSummaryList";
import type { ItemFlingEffectListQueryParamsType, ItemFlingEffectList200Type, ItemFlingEffectListQueryResponseType } from "../../ts/ItemFlingEffectListType";


export function createItemFlingEffectListQueryParams(): NonNullable<ItemFlingEffectListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createItemFlingEffectList200(): NonNullable<ItemFlingEffectList200Type> {
    faker.seed([100]);
    return createPaginatedItemFlingEffectSummaryList();
}


export function createItemFlingEffectListQueryResponse(): NonNullable<ItemFlingEffectListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedItemFlingEffectSummaryList();
}