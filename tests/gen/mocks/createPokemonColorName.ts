import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokemonColorNameType } from "../ts/PokemonColorNameType";


export function createPokemonColorName(data: NonNullable<Partial<PokemonColorNameType>> = {}): NonNullable<PokemonColorNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}