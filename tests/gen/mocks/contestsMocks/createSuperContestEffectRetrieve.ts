import { faker } from "@faker-js/faker";
import { createSuperContestEffectDetail } from "../createSuperContestEffectDetail";
import type { SuperContestEffectRetrievePathParamsType, SuperContestEffectRetrieve200Type, SuperContestEffectRetrieveQueryResponseType } from "../../ts/SuperContestEffectRetrieveType";


export function createSuperContestEffectRetrievePathParams(): NonNullable<SuperContestEffectRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createSuperContestEffectRetrieve200(): NonNullable<SuperContestEffectRetrieve200Type> {
    faker.seed([100]);
    return createSuperContestEffectDetail();
}


export function createSuperContestEffectRetrieveQueryResponse(): NonNullable<SuperContestEffectRetrieveQueryResponseType> {
    faker.seed([100]);
    return createSuperContestEffectDetail();
}