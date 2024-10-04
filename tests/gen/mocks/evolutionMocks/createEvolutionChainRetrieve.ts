import { faker } from "@faker-js/faker";
import { createEvolutionChainDetail } from "../createEvolutionChainDetail";
import type { EvolutionChainRetrievePathParamsType, EvolutionChainRetrieve200Type, EvolutionChainRetrieveQueryResponseType } from "../../ts/EvolutionChainRetrieveType";


export function createEvolutionChainRetrievePathParams(): NonNullable<EvolutionChainRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createEvolutionChainRetrieve200(): NonNullable<EvolutionChainRetrieve200Type> {
    faker.seed([100]);
    return createEvolutionChainDetail();
}


export function createEvolutionChainRetrieveQueryResponse(): NonNullable<EvolutionChainRetrieveQueryResponseType> {
    faker.seed([100]);
    return createEvolutionChainDetail();
}