import { faker } from "@faker-js/faker";
import { createPaginatedAbilitySummaryList } from "../createPaginatedAbilitySummaryList";
import type { AbilityListQueryParamsType, AbilityList200Type, AbilityListQueryResponseType } from "../../ts/AbilityListType";


export function createAbilityListQueryParams(): NonNullable<AbilityListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createAbilityList200(): NonNullable<AbilityList200Type> {
    faker.seed([100]);
    return createPaginatedAbilitySummaryList();
}


export function createAbilityListQueryResponse(): NonNullable<AbilityListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedAbilitySummaryList();
}