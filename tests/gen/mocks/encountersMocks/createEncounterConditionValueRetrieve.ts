import { faker } from "@faker-js/faker";
import { createEncounterConditionValueDetail } from "../createEncounterConditionValueDetail";
import type { EncounterConditionValueRetrievePathParamsType, EncounterConditionValueRetrieve200Type, EncounterConditionValueRetrieveQueryResponseType } from "../../ts/EncounterConditionValueRetrieveType";


export function createEncounterConditionValueRetrievePathParams(): NonNullable<EncounterConditionValueRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEncounterConditionValueRetrieve200(): NonNullable<EncounterConditionValueRetrieve200Type> {
    faker.seed([100]);
    return createEncounterConditionValueDetail();
}


export function createEncounterConditionValueRetrieveQueryResponse(): NonNullable<EncounterConditionValueRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEncounterConditionValueDetail();
}