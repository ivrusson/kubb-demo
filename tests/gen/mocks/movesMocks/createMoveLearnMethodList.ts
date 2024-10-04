import { faker } from "@faker-js/faker";
import { createPaginatedMoveLearnMethodSummaryList } from "../createPaginatedMoveLearnMethodSummaryList";
import type { MoveLearnMethodListQueryParamsType, MoveLearnMethodList200Type, MoveLearnMethodListQueryResponseType } from "../../ts/MoveLearnMethodListType";


export function createMoveLearnMethodListQueryParams(): NonNullable<MoveLearnMethodListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveLearnMethodList200(): NonNullable<MoveLearnMethodList200Type> {
    faker.seed([100]);
    return createPaginatedMoveLearnMethodSummaryList();
}


export function createMoveLearnMethodListQueryResponse(): NonNullable<MoveLearnMethodListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveLearnMethodSummaryList();
}