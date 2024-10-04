import { faker } from "@faker-js/faker";
import { createPaginatedEncounterConditionValueSummaryList } from "../createPaginatedEncounterConditionValueSummaryList";
import type { EncounterConditionValueListQueryParamsType, EncounterConditionValueList200Type, EncounterConditionValueListQueryResponseType } from "../../ts/EncounterConditionValueListType";


export function createEncounterConditionValueListQueryParams(): NonNullable<EncounterConditionValueListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEncounterConditionValueList200(): NonNullable<EncounterConditionValueList200Type> {
    faker.seed([100]);
    return createPaginatedEncounterConditionValueSummaryList();
}


export function createEncounterConditionValueListQueryResponse(): NonNullable<EncounterConditionValueListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEncounterConditionValueSummaryList();
}