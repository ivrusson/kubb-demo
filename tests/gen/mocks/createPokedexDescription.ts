import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokedexDescriptionType } from "../ts/PokedexDescriptionType";


export function createPokedexDescription(data: NonNullable<Partial<PokedexDescriptionType>> = {}): NonNullable<PokedexDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}