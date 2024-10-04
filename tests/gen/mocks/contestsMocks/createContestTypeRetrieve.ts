import { faker } from "@faker-js/faker";
import { createContestTypeDetail } from "../createContestTypeDetail";
import type { ContestTypeRetrievePathParamsType, ContestTypeRetrieve200Type, ContestTypeRetrieveQueryResponseType } from "../../ts/ContestTypeRetrieveType";


export function createContestTypeRetrievePathParams(): NonNullable<ContestTypeRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createContestTypeRetrieve200(): NonNullable<ContestTypeRetrieve200Type> {
    faker.seed([100]);
    return createContestTypeDetail();
}


export function createContestTypeRetrieveQueryResponse(): NonNullable<ContestTypeRetrieveQueryResponseType> {
    faker.seed([100]);
    return createContestTypeDetail();
}