import { faker } from "@faker-js/faker";
import { createPaginatedMoveTargetSummaryList } from "../createPaginatedMoveTargetSummaryList";
import type { MoveTargetListQueryParamsType, MoveTargetList200Type, MoveTargetListQueryResponseType } from "../../ts/MoveTargetListType";


export function createMoveTargetListQueryParams(): NonNullable<MoveTargetListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMoveTargetList200(): NonNullable<MoveTargetList200Type> {
    faker.seed([100]);
    return createPaginatedMoveTargetSummaryList();
}


export function createMoveTargetListQueryResponse(): NonNullable<MoveTargetListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMoveTargetSummaryList();
}