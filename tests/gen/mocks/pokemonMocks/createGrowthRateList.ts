import { faker } from "@faker-js/faker";
import { createPaginatedGrowthRateSummaryList } from "../createPaginatedGrowthRateSummaryList";
import type { GrowthRateListQueryParamsType, GrowthRateList200Type, GrowthRateListQueryResponseType } from "../../ts/GrowthRateListType";


export function createGrowthRateListQueryParams(): NonNullable<GrowthRateListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createGrowthRateList200(): NonNullable<GrowthRateList200Type> {
    faker.seed([100]);
    return createPaginatedGrowthRateSummaryList();
}


export function createGrowthRateListQueryResponse(): NonNullable<GrowthRateListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedGrowthRateSummaryList();
}