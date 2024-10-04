import { faker } from "@faker-js/faker";
import { createPaginatedEvolutionChainSummaryList } from "../createPaginatedEvolutionChainSummaryList";
import type { EvolutionChainListQueryParamsType, EvolutionChainList200Type, EvolutionChainListQueryResponseType } from "../../ts/EvolutionChainListType";


export function createEvolutionChainListQueryParams(): NonNullable<EvolutionChainListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createEvolutionChainList200(): NonNullable<EvolutionChainList200Type> {
    faker.seed([100]);
    return createPaginatedEvolutionChainSummaryList();
}


export function createEvolutionChainListQueryResponse(): NonNullable<EvolutionChainListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedEvolutionChainSummaryList();
}