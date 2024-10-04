import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokemonHabitatNameType } from "../ts/PokemonHabitatNameType";


export function createPokemonHabitatName(data: NonNullable<Partial<PokemonHabitatNameType>> = {}): NonNullable<PokemonHabitatNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}