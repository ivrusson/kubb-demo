import { faker } from "@faker-js/faker";
import { createPaginatedContestEffectSummaryList } from "../createPaginatedContestEffectSummaryList";
import type { ContestEffectListQueryParamsType, ContestEffectList200Type, ContestEffectListQueryResponseType } from "../../ts/ContestEffectListType";


export function createContestEffectListQueryParams(): NonNullable<ContestEffectListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createContestEffectList200(): NonNullable<ContestEffectList200Type> {
    faker.seed([100]);
    return createPaginatedContestEffectSummaryList();
}


export function createContestEffectListQueryResponse(): NonNullable<ContestEffectListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedContestEffectSummaryList();
}