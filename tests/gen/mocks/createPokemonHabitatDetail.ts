import { createPokemonHabitatName } from "./createPokemonHabitatName";
import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { faker } from "@faker-js/faker";
import type { PokemonHabitatDetailType } from "../ts/PokemonHabitatDetailType";


export function createPokemonHabitatDetail(data: NonNullable<Partial<PokemonHabitatDetailType>> = {}): NonNullable<PokemonHabitatDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createPokemonHabitatName()]) as any, "pokemon_species": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any },
        ...data
    };
}