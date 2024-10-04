import { faker } from "@faker-js/faker";
import { createContestEffectDetail } from "../createContestEffectDetail";
import type { ContestEffectRetrievePathParamsType, ContestEffectRetrieve200Type, ContestEffectRetrieveQueryResponseType } from "../../ts/ContestEffectRetrieveType";


export function createContestEffectRetrievePathParams(): NonNullable<ContestEffectRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createContestEffectRetrieve200(): NonNullable<ContestEffectRetrieve200Type> {
    faker.seed([100]);
    return createContestEffectDetail();
}


export function createContestEffectRetrieveQueryResponse(): NonNullable<ContestEffectRetrieveQueryResponseType> {
    faker.seed([100]);
    return createContestEffectDetail();
}