import { faker } from "@faker-js/faker";
import { createPaginatedVersionGroupSummaryList } from "../createPaginatedVersionGroupSummaryList";
import type { VersionGroupListQueryParamsType, VersionGroupList200Type, VersionGroupListQueryResponseType } from "../../ts/VersionGroupListType";


export function createVersionGroupListQueryParams(): NonNullable<VersionGroupListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createVersionGroupList200(): NonNullable<VersionGroupList200Type> {
    faker.seed([100]);
    return createPaginatedVersionGroupSummaryList();
}


export function createVersionGroupListQueryResponse(): NonNullable<VersionGroupListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedVersionGroupSummaryList();
}