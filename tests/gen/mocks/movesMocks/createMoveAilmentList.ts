import { faker } from "@faker-js/faker";
import { createPaginatedMoveMetaAilmentSummaryList } from "../createPaginatedMoveMetaAilmentSummaryList";
import type { MoveAilmentListQueryParamsType, MoveAilmentList200Type, MoveAilmentListQueryResponseType } from "../../ts/MoveAilmentListType";


export function createMoveAilmentListQueryParams(): NonNullable<MoveAilmentListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveAilmentList200(): NonNullable<MoveAilmentList200Type> {
    faker.seed([100]);
    return createPaginatedMoveMetaAilmentSummaryList();
}


export function createMoveAilmentListQueryResponse(): NonNullable<MoveAilmentListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveMetaAilmentSummaryList();
}