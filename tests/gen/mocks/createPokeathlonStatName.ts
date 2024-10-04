import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokeathlonStatNameType } from "../ts/PokeathlonStatNameType";


export function createPokeathlonStatName(data: NonNullable<Partial<PokeathlonStatNameType>> = {}): NonNullable<PokeathlonStatNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}