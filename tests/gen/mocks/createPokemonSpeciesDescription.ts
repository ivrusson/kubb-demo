import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokemonSpeciesDescriptionType } from "../ts/PokemonSpeciesDescriptionType";


export function createPokemonSpeciesDescription(data: NonNullable<Partial<PokemonSpeciesDescriptionType>> = {}): NonNullable<PokemonSpeciesDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}