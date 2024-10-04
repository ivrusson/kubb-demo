import { faker } from "@faker-js/faker";
import { createPaginatedGenerationSummaryList } from "../createPaginatedGenerationSummaryList";
import type { GenerationListQueryParamsType, GenerationList200Type, GenerationListQueryResponseType } from "../../ts/GenerationListType";


export function createGenerationListQueryParams(): NonNullable<GenerationListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createGenerationList200(): NonNullable<GenerationList200Type> {
    faker.seed([100]);
    return createPaginatedGenerationSummaryList();
}


export function createGenerationListQueryResponse(): NonNullable<GenerationListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedGenerationSummaryList();
}