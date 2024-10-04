import { createVersionSummary } from "./createVersionSummary";
import { faker } from "@faker-js/faker";
import type { PokemonGameIndexType } from "../ts/PokemonGameIndexType";


export function createPokemonGameIndex(data: NonNullable<Partial<PokemonGameIndexType>> = {}): NonNullable<PokemonGameIndexType> {
    faker.seed([100]);
    return {
        ...{ "game_index": faker.number.int(), "version": createVersionSummary() },
        ...data
    };
}