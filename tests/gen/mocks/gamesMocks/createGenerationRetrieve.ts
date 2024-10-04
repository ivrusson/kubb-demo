import { faker } from "@faker-js/faker";
import { createGenerationDetail } from "../createGenerationDetail";
import type { GenerationRetrievePathParamsType, GenerationRetrieve200Type, GenerationRetrieveQueryResponseType } from "../../ts/GenerationRetrieveType";


export function createGenerationRetrievePathParams(): NonNullable<GenerationRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createGenerationRetrieve200(): NonNullable<GenerationRetrieve200Type> {
    faker.seed([100]);
    return createGenerationDetail();
}


export function createGenerationRetrieveQueryResponse(): NonNullable<GenerationRetrieveQueryResponseType> {
    faker.seed([100]);
    return createGenerationDetail();
}