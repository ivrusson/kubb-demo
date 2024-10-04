import { faker } from "@faker-js/faker";
import { createGenderDetail } from "../createGenderDetail";
import type { GenderRetrievePathParamsType, GenderRetrieve200Type, GenderRetrieveQueryResponseType } from "../../ts/GenderRetrieveType";


export function createGenderRetrievePathParams(): NonNullable<GenderRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createGenderRetrieve200(): NonNullable<GenderRetrieve200Type> {
    faker.seed([100]);
    return createGenderDetail();
}


export function createGenderRetrieveQueryResponse(): NonNullable<GenderRetrieveQueryResponseType> {
    faker.seed([100]);
    return createGenderDetail();
}