import { faker } from "@faker-js/faker";
import { createPaginatedMoveBattleStyleSummaryList } from "../createPaginatedMoveBattleStyleSummaryList";
import type { MoveBattleStyleListQueryParamsType, MoveBattleStyleList200Type, MoveBattleStyleListQueryResponseType } from "../../ts/MoveBattleStyleListType";


export function createMoveBattleStyleListQueryParams(): NonNullable<MoveBattleStyleListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveBattleStyleList200(): NonNullable<MoveBattleStyleList200Type> {
    faker.seed([100]);
    return createPaginatedMoveBattleStyleSummaryList();
}


export function createMoveBattleStyleListQueryResponse(): NonNullable<MoveBattleStyleListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveBattleStyleSummaryList();
}