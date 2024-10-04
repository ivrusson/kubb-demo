import { faker } from "@faker-js/faker";
import { createMoveBattleStyleDetail } from "../createMoveBattleStyleDetail";
import type { MoveBattleStyleRetrievePathParamsType, MoveBattleStyleRetrieve200Type, MoveBattleStyleRetrieveQueryResponseType } from "../../ts/MoveBattleStyleRetrieveType";


export function createMoveBattleStyleRetrievePathParams(): NonNullable<MoveBattleStyleRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMoveBattleStyleRetrieve200(): NonNullable<MoveBattleStyleRetrieve200Type> {
    faker.seed([100]);
    return createMoveBattleStyleDetail();
}


export function createMoveBattleStyleRetrieveQueryResponse(): NonNullable<MoveBattleStyleRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMoveBattleStyleDetail();
}