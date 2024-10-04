import { faker } from "@faker-js/faker";
import { createMoveDetail } from "../createMoveDetail";
import type { MoveRetrievePathParamsType, MoveRetrieve200Type, MoveRetrieveQueryResponseType } from "../../ts/MoveRetrieveType";


export function createMoveRetrievePathParams(): NonNullable<MoveRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveRetrieve200(): NonNullable<MoveRetrieve200Type> {
    faker.seed([100]);
    return createMoveDetail();
}


export function createMoveRetrieveQueryResponse(): NonNullable<MoveRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveDetail();
}