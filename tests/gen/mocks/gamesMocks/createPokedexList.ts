import { faker } from "@faker-js/faker";
import { createPaginatedPokedexSummaryList } from "../createPaginatedPokedexSummaryList";
import type { PokedexListQueryParamsType, PokedexList200Type, PokedexListQueryResponseType } from "../../ts/PokedexListType";


export function createPokedexListQueryParams(): NonNullable<PokedexListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokedexList200(): NonNullable<PokedexList200Type> {
    faker.seed([100]);
    return createPaginatedPokedexSummaryList();
}


export function createPokedexListQueryResponse(): NonNullable<PokedexListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokedexSummaryList();
}