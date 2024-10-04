import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { EncounterMethodNameType } from "../ts/EncounterMethodNameType";


export function createEncounterMethodName(data: NonNullable<Partial<EncounterMethodNameType>> = {}): NonNullable<EncounterMethodNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}