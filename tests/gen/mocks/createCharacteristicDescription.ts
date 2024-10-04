import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { CharacteristicDescriptionType } from "../ts/CharacteristicDescriptionType";


export function createCharacteristicDescription(data: NonNullable<Partial<CharacteristicDescriptionType>> = {}): NonNullable<CharacteristicDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}