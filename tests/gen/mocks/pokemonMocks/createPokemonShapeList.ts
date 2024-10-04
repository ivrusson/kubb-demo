import { faker } from "@faker-js/faker";
import { createPaginatedPokemonShapeSummaryList } from "../createPaginatedPokemonShapeSummaryList";
import type { PokemonShapeListQueryParamsType, PokemonShapeList200Type, PokemonShapeListQueryResponseType } from "../../ts/PokemonShapeListType";


export function createPokemonShapeListQueryParams(): NonNullable<PokemonShapeListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createPokemonShapeList200(): NonNullable<PokemonShapeList200Type> {
    faker.seed([100]);
    return createPaginatedPokemonShapeSummaryList();
}


export function createPokemonShapeListQueryResponse(): NonNullable<PokemonShapeListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedPokemonShapeSummaryList();
}