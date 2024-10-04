import { faker } from "@faker-js/faker";
import { createPaginatedPokeathlonStatSummaryList } from "../createPaginatedPokeathlonStatSummaryList";
import type { PokeathlonStatListQueryParamsType, PokeathlonStatList200Type, PokeathlonStatListQueryResponseType } from "../../ts/PokeathlonStatListType";


export function createPokeathlonStatListQueryParams(): NonNullable<PokeathlonStatListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokeathlonStatList200(): NonNullable<PokeathlonStatList200Type> {
    faker.seed([100]);
    return createPaginatedPokeathlonStatSummaryList();
}


export function createPokeathlonStatListQueryResponse(): NonNullable<PokeathlonStatListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokeathlonStatSummaryList();
}