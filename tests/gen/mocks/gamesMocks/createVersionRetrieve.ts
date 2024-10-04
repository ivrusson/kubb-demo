import { faker } from "@faker-js/faker";
import { createVersionDetail } from "../createVersionDetail";
import type { VersionRetrievePathParamsType, VersionRetrieve200Type, VersionRetrieveQueryResponseType } from "../../ts/VersionRetrieveType";


export function createVersionRetrievePathParams(): NonNullable<VersionRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createVersionRetrieve200(): NonNullable<VersionRetrieve200Type> {
    faker.seed([100]);
    return createVersionDetail();
}


export function createVersionRetrieveQueryResponse(): NonNullable<VersionRetrieveQueryResponseType> {
    faker.seed([100]);
    return createVersionDetail();
}