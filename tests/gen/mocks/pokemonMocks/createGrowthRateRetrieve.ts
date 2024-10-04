import { faker } from "@faker-js/faker";
import { createGrowthRateDetail } from "../createGrowthRateDetail";
import type { GrowthRateRetrievePathParamsType, GrowthRateRetrieve200Type, GrowthRateRetrieveQueryResponseType } from "../../ts/GrowthRateRetrieveType";


export function createGrowthRateRetrievePathParams(): NonNullable<GrowthRateRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createGrowthRateRetrieve200(): NonNullable<GrowthRateRetrieve200Type> {
    faker.seed([100]);
    return createGrowthRateDetail();
}


export function createGrowthRateRetrieveQueryResponse(): NonNullable<GrowthRateRetrieveQueryResponseType> {
    faker.seed([100]);
    return createGrowthRateDetail();
}