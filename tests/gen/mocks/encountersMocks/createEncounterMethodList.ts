import { faker } from "@faker-js/faker";
import { createPaginatedEncounterMethodSummaryList } from "../createPaginatedEncounterMethodSummaryList";
import type { EncounterMethodListQueryParamsType, EncounterMethodList200Type, EncounterMethodListQueryResponseType } from "../../ts/EncounterMethodListType";


export function createEncounterMethodListQueryParams(): NonNullable<EncounterMethodListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEncounterMethodList200(): NonNullable<EncounterMethodList200Type> {
    faker.seed([100]);
    return createPaginatedEncounterMethodSummaryList();
}


export function createEncounterMethodListQueryResponse(): NonNullable<EncounterMethodListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEncounterMethodSummaryList();
}