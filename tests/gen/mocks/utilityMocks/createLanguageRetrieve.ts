import { faker } from "@faker-js/faker";
import { createLanguageDetail } from "../createLanguageDetail";
import type { LanguageRetrievePathParamsType, LanguageRetrieve200Type, LanguageRetrieveQueryResponseType } from "../../ts/LanguageRetrieveType";


export function createLanguageRetrievePathParams(): NonNullable<LanguageRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createLanguageRetrieve200(): NonNullable<LanguageRetrieve200Type> {
    faker.seed([100]);
    return createLanguageDetail();
}


export function createLanguageRetrieveQueryResponse(): NonNullable<LanguageRetrieveQueryResponseType> {
    faker.seed([100]);
    return createLanguageDetail();
}