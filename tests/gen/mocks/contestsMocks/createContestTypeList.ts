import { faker } from "@faker-js/faker";
import { createPaginatedContestTypeSummaryList } from "../createPaginatedContestTypeSummaryList";
import type { ContestTypeListQueryParamsType, ContestTypeList200Type, ContestTypeListQueryResponseType } from "../../ts/ContestTypeListType";


export function createContestTypeListQueryParams(): NonNullable<ContestTypeListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createContestTypeList200(): NonNullable<ContestTypeList200Type> {
    faker.seed([100]);
    return createPaginatedContestTypeSummaryList();
}


export function createContestTypeListQueryResponse(): NonNullable<ContestTypeListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedContestTypeSummaryList();
}