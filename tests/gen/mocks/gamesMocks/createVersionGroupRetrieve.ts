import { faker } from "@faker-js/faker";
import { createVersionGroupDetail } from "../createVersionGroupDetail";
import type { VersionGroupRetrievePathParamsType, VersionGroupRetrieve200Type, VersionGroupRetrieveQueryResponseType } from "../../ts/VersionGroupRetrieveType";


export function createVersionGroupRetrievePathParams(): NonNullable<VersionGroupRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createVersionGroupRetrieve200(): NonNullable<VersionGroupRetrieve200Type> {
    faker.seed([100]);
    return createVersionGroupDetail();
}


export function createVersionGroupRetrieveQueryResponse(): NonNullable<VersionGroupRetrieveQueryResponseType> {
    faker.seed([100]);
    return createVersionGroupDetail();
}