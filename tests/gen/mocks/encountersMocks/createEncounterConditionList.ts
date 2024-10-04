import { faker } from "@faker-js/faker";
import { createPaginatedEncounterConditionSummaryList } from "../createPaginatedEncounterConditionSummaryList";
import type { EncounterConditionListQueryParamsType, EncounterConditionList200Type, EncounterConditionListQueryResponseType } from "../../ts/EncounterConditionListType";


export function createEncounterConditionListQueryParams(): NonNullable<EncounterConditionListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEncounterConditionList200(): NonNullable<EncounterConditionList200Type> {
    faker.seed([100]);
    return createPaginatedEncounterConditionSummaryList();
}


export function createEncounterConditionListQueryResponse(): NonNullable<EncounterConditionListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEncounterConditionSummaryList();
}