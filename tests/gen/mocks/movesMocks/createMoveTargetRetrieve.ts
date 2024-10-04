import { faker } from "@faker-js/faker";
import { createMoveTargetDetail } from "../createMoveTargetDetail";
import type { MoveTargetRetrievePathParamsType, MoveTargetRetrieve200Type, MoveTargetRetrieveQueryResponseType } from "../../ts/MoveTargetRetrieveType";


export function createMoveTargetRetrievePathParams(): NonNullable<MoveTargetRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveTargetRetrieve200(): NonNullable<MoveTargetRetrieve200Type> {
    faker.seed([100]);
    return createMoveTargetDetail();
}


export function createMoveTargetRetrieveQueryResponse(): NonNullable<MoveTargetRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveTargetDetail();
}