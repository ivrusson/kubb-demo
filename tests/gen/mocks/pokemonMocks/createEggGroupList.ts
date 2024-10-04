import { faker } from "@faker-js/faker";
import { createPaginatedEggGroupSummaryList } from "../createPaginatedEggGroupSummaryList";
import type { EggGroupListQueryParamsType, EggGroupList200Type, EggGroupListQueryResponseType } from "../../ts/EggGroupListType";


export function createEggGroupListQueryParams(): NonNullable<EggGroupListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEggGroupList200(): NonNullable<EggGroupList200Type> {
    faker.seed([100]);
    return createPaginatedEggGroupSummaryList();
}


export function createEggGroupListQueryResponse(): NonNullable<EggGroupListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEggGroupSummaryList();
}