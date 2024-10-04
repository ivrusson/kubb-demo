import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { LanguageNameType } from "../ts/LanguageNameType";


export function createLanguageName(data: NonNullable<Partial<LanguageNameType>> = {}): NonNullable<LanguageNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}