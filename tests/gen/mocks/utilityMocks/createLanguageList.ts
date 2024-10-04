import { faker } from "@faker-js/faker";
import { createPaginatedLanguageSummaryList } from "../createPaginatedLanguageSummaryList";
import type { LanguageListQueryParamsType, LanguageList200Type, LanguageListQueryResponseType } from "../../ts/LanguageListType";


export function createLanguageListQueryParams(): NonNullable<LanguageListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createLanguageList200(): NonNullable<LanguageList200Type> {
    faker.seed([100]);
    return createPaginatedLanguageSummaryList();
}


export function createLanguageListQueryResponse(): NonNullable<LanguageListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedLanguageSummaryList();
}