import { faker } from "@faker-js/faker";
import { createBerryFlavorDetail } from "../createBerryFlavorDetail";
import type { BerryFlavorRetrievePathParamsType, BerryFlavorRetrieve200Type, BerryFlavorRetrieveQueryResponseType } from "../../ts/BerryFlavorRetrieveType";


export function createBerryFlavorRetrievePathParams(): NonNullable<BerryFlavorRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createBerryFlavorRetrieve200(): NonNullable<BerryFlavorRetrieve200Type> {
    faker.seed([100]);
    return createBerryFlavorDetail();
}


export function createBerryFlavorRetrieveQueryResponse(): NonNullable<BerryFlavorRetrieveQueryResponseType> {
    faker.seed([100]);
    return createBerryFlavorDetail();
}