import { faker } from "@faker-js/faker";
import { createStatDetail } from "../createStatDetail";
import type { StatRetrievePathParamsType, StatRetrieve200Type, StatRetrieveQueryResponseType } from "../../ts/StatRetrieveType";


export function createStatRetrievePathParams(): NonNullable<StatRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createStatRetrieve200(): NonNullable<StatRetrieve200Type> {
    faker.seed([100]);
    return createStatDetail();
}


export function createStatRetrieveQueryResponse(): NonNullable<StatRetrieveQueryResponseType> {
    faker.seed([100]);
    return createStatDetail();
}