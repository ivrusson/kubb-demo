import { faker } from "@faker-js/faker";
import { createPaginatedSuperContestEffectSummaryList } from "../createPaginatedSuperContestEffectSummaryList";
import type { SuperContestEffectListQueryParamsType, SuperContestEffectList200Type, SuperContestEffectListQueryResponseType } from "../../ts/SuperContestEffectListType";


export function createSuperContestEffectListQueryParams(): NonNullable<SuperContestEffectListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createSuperContestEffectList200(): NonNullable<SuperContestEffectList200Type> {
    faker.seed([100]);
    return createPaginatedSuperContestEffectSummaryList();
}


export function createSuperContestEffectListQueryResponse(): NonNullable<SuperContestEffectListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedSuperContestEffectSummaryList();
}