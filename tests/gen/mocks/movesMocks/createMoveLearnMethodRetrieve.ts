import { faker } from "@faker-js/faker";
import { createMoveLearnMethodDetail } from "../createMoveLearnMethodDetail";
import type { MoveLearnMethodRetrievePathParamsType, MoveLearnMethodRetrieve200Type, MoveLearnMethodRetrieveQueryResponseType } from "../../ts/MoveLearnMethodRetrieveType";


export function createMoveLearnMethodRetrievePathParams(): NonNullable<MoveLearnMethodRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveLearnMethodRetrieve200(): NonNullable<MoveLearnMethodRetrieve200Type> {
    faker.seed([100]);
    return createMoveLearnMethodDetail();
}


export function createMoveLearnMethodRetrieveQueryResponse(): NonNullable<MoveLearnMethodRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveLearnMethodDetail();
}