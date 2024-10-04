import { faker } from "@faker-js/faker";
import { createPaginatedStatSummaryList } from "../createPaginatedStatSummaryList";
import type { StatListQueryParamsType, StatList200Type, StatListQueryResponseType } from "../../ts/StatListType";


export function createStatListQueryParams(): NonNullable<StatListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createStatList200(): NonNullable<StatList200Type> {
    faker.seed([100]);
    return createPaginatedStatSummaryList();
}


export function createStatListQueryResponse(): NonNullable<StatListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedStatSummaryList();
}