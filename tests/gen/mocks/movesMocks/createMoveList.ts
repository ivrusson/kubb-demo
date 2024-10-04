import { faker } from "@faker-js/faker";
import { createPaginatedMoveSummaryList } from "../createPaginatedMoveSummaryList";
import type { MoveListQueryParamsType, MoveList200Type, MoveListQueryResponseType } from "../../ts/MoveListType";


export function createMoveListQueryParams(): NonNullable<MoveListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveList200(): NonNullable<MoveList200Type> {
    faker.seed([100]);
    return createPaginatedMoveSummaryList();
}


export function createMoveListQueryResponse(): NonNullable<MoveListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveSummaryList();
}