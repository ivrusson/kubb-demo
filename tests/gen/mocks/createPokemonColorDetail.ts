import { createPokemonColorName } from "./createPokemonColorName";
import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { faker } from "@faker-js/faker";
import type { PokemonColorDetailType } from "../ts/PokemonColorDetailType";


export function createPokemonColorDetail(data: NonNullable<Partial<PokemonColorDetailType>> = {}): NonNullable<PokemonColorDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createPokemonColorName()]) as any, "pokemon_species": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any },
        ...data
    };
}