import { faker } from "@faker-js/faker";
import { createAbilityDetail } from "../createAbilityDetail";
import type { AbilityRetrievePathParamsType, AbilityRetrieve200Type, AbilityRetrieveQueryResponseType } from "../../ts/AbilityRetrieveType";


export function createAbilityRetrievePathParams(): NonNullable<AbilityRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createAbilityRetrieve200(): NonNullable<AbilityRetrieve200Type> {
    faker.seed([100]);
    return createAbilityDetail();
}


export function createAbilityRetrieveQueryResponse(): NonNullable<AbilityRetrieveQueryResponseType> {
    faker.seed([100]);
    return createAbilityDetail();
}