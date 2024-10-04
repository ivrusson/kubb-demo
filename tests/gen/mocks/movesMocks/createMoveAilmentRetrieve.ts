import { faker } from "@faker-js/faker";
import { createMoveMetaAilmentDetail } from "../createMoveMetaAilmentDetail";
import type { MoveAilmentRetrievePathParamsType, MoveAilmentRetrieve200Type, MoveAilmentRetrieveQueryResponseType } from "../../ts/MoveAilmentRetrieveType";


export function createMoveAilmentRetrievePathParams(): NonNullable<MoveAilmentRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveAilmentRetrieve200(): NonNullable<MoveAilmentRetrieve200Type> {
    faker.seed([100]);
    return createMoveMetaAilmentDetail();
}


export function createMoveAilmentRetrieveQueryResponse(): NonNullable<MoveAilmentRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveMetaAilmentDetail();
}