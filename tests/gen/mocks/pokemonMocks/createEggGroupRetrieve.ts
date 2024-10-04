import { faker } from "@faker-js/faker";
import { createEggGroupDetail } from "../createEggGroupDetail";
import type { EggGroupRetrievePathParamsType, EggGroupRetrieve200Type, EggGroupRetrieveQueryResponseType } from "../../ts/EggGroupRetrieveType";


export function createEggGroupRetrievePathParams(): NonNullable<EggGroupRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEggGroupRetrieve200(): NonNullable<EggGroupRetrieve200Type> {
    faker.seed([100]);
    return createEggGroupDetail();
}


export function createEggGroupRetrieveQueryResponse(): NonNullable<EggGroupRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEggGroupDetail();
}