import { faker } from "@faker-js/faker";
import { createEvolutionTriggerDetail } from "../createEvolutionTriggerDetail";
import type { EvolutionTriggerRetrievePathParamsType, EvolutionTriggerRetrieve200Type, EvolutionTriggerRetrieveQueryResponseType } from "../../ts/EvolutionTriggerRetrieveType";


export function createEvolutionTriggerRetrievePathParams(): NonNullable<EvolutionTriggerRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEvolutionTriggerRetrieve200(): NonNullable<EvolutionTriggerRetrieve200Type> {
    faker.seed([100]);
    return createEvolutionTriggerDetail();
}


export function createEvolutionTriggerRetrieveQueryResponse(): NonNullable<EvolutionTriggerRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEvolutionTriggerDetail();
}