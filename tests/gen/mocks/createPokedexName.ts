import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PokedexNameType } from "../ts/PokedexNameType";


export function createPokedexName(data: NonNullable<Partial<PokedexNameType>> = {}): NonNullable<PokedexNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}