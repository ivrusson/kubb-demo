import { faker } from "@faker-js/faker";
import { createEncounterConditionDetail } from "../createEncounterConditionDetail";
import type { EncounterConditionRetrievePathParamsType, EncounterConditionRetrieve200Type, EncounterConditionRetrieveQueryResponseType } from "../../ts/EncounterConditionRetrieveType";


export function createEncounterConditionRetrievePathParams(): NonNullable<EncounterConditionRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEncounterConditionRetrieve200(): NonNullable<EncounterConditionRetrieve200Type> {
    faker.seed([100]);
    return createEncounterConditionDetail();
}


export function createEncounterConditionRetrieveQueryResponse(): NonNullable<EncounterConditionRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEncounterConditionDetail();
}