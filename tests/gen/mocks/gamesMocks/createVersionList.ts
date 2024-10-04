import { faker } from "@faker-js/faker";
import { createPaginatedVersionSummaryList } from "../createPaginatedVersionSummaryList";
import type { VersionListQueryParamsType, VersionList200Type, VersionListQueryResponseType } from "../../ts/VersionListType";


export function createVersionListQueryParams(): NonNullable<VersionListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createVersionList200(): NonNullable<VersionList200Type> {
    faker.seed([100]);
    return createPaginatedVersionSummaryList();
}


export function createVersionListQueryResponse(): NonNullable<VersionListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedVersionSummaryList();
}