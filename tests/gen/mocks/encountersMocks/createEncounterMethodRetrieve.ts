import { faker } from "@faker-js/faker";
import { createEncounterMethodDetail } from "../createEncounterMethodDetail";
import type { EncounterMethodRetrievePathParamsType, EncounterMethodRetrieve200Type, EncounterMethodRetrieveQueryResponseType } from "../../ts/EncounterMethodRetrieveType";


export function createEncounterMethodRetrievePathParams(): NonNullable<EncounterMethodRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEncounterMethodRetrieve200(): NonNullable<EncounterMethodRetrieve200Type> {
    faker.seed([100]);
    return createEncounterMethodDetail();
}


export function createEncounterMethodRetrieveQueryResponse(): NonNullable<EncounterMethodRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEncounterMethodDetail();
}