import { createLanguageSummary } from "./createLanguageSummary";
import { createVersionSummary } from "./createVersionSummary";
import { faker } from "@faker-js/faker";
import type { PokemonSpeciesFlavorTextType } from "../ts/PokemonSpeciesFlavorTextType";


export function createPokemonSpeciesFlavorText(data: NonNullable<Partial<PokemonSpeciesFlavorTextType>> = {}): NonNullable<PokemonSpeciesFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "flavor_text": faker.string.alpha(), "language": createLanguageSummary(), "version": createVersionSummary() },
        ...data
    };
}