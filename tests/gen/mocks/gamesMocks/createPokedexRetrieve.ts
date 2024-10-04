import { faker } from "@faker-js/faker";
import { createPokedexDetail } from "../createPokedexDetail";
import type { PokedexRetrievePathParamsType, PokedexRetrieve200Type, PokedexRetrieveQueryResponseType } from "../../ts/PokedexRetrieveType";


export function createPokedexRetrievePathParams(): NonNullable<PokedexRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createPokedexRetrieve200(): NonNullable<PokedexRetrieve200Type> {
    faker.seed([100]);
    return createPokedexDetail();
}


export function createPokedexRetrieveQueryResponse(): NonNullable<PokedexRetrieveQueryResponseType> {
    faker.seed([100]);
    return createPokedexDetail();
}