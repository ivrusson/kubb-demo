import { faker } from "@faker-js/faker";
import { createBerryFirmnessDetail } from "../createBerryFirmnessDetail";
import type { BerryFirmnessRetrievePathParamsType, BerryFirmnessRetrieve200Type, BerryFirmnessRetrieveQueryResponseType } from "../../ts/BerryFirmnessRetrieveType";


export function createBerryFirmnessRetrievePathParams(): NonNullable<BerryFirmnessRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createBerryFirmnessRetrieve200(): NonNullable<BerryFirmnessRetrieve200Type> {
    faker.seed([100]);
    return createBerryFirmnessDetail();
}


export function createBerryFirmnessRetrieveQueryResponse(): NonNullable<BerryFirmnessRetrieveQueryResponseType> {
    faker.seed([100]);
    return createBerryFirmnessDetail();
}