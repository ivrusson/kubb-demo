import { faker } from "@faker-js/faker";
import { createPalParkAreaDetail } from "../createPalParkAreaDetail";
import type { PalParkAreaRetrievePathParamsType, PalParkAreaRetrieve200Type, PalParkAreaRetrieveQueryResponseType } from "../../ts/PalParkAreaRetrieveType";


export function createPalParkAreaRetrievePathParams(): NonNullable<PalParkAreaRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPalParkAreaRetrieve200(): NonNullable<PalParkAreaRetrieve200Type> {
    faker.seed([100]);
    return createPalParkAreaDetail();
}


export function createPalParkAreaRetrieveQueryResponse(): NonNullable<PalParkAreaRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPalParkAreaDetail();
}