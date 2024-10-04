import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { GenerationNameType } from "../ts/GenerationNameType";


export function createGenerationName(data: NonNullable<Partial<GenerationNameType>> = {}): NonNullable<GenerationNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}