import { faker } from "@faker-js/faker";
import { createPaginatedEvolutionTriggerSummaryList } from "../createPaginatedEvolutionTriggerSummaryList";
import type { EvolutionTriggerListQueryParamsType, EvolutionTriggerList200Type, EvolutionTriggerListQueryResponseType } from "../../ts/EvolutionTriggerListType";


export function createEvolutionTriggerListQueryParams(): NonNullable<EvolutionTriggerListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEvolutionTriggerList200(): NonNullable<EvolutionTriggerList200Type> {
    faker.seed([100]);
    return createPaginatedEvolutionTriggerSummaryList();
}


export function createEvolutionTriggerListQueryResponse(): NonNullable<EvolutionTriggerListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEvolutionTriggerSummaryList();
}