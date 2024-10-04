import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { AbilityNameType } from "../ts/AbilityNameType";


export function createAbilityName(data: NonNullable<Partial<AbilityNameType>> = {}): NonNullable<AbilityNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}