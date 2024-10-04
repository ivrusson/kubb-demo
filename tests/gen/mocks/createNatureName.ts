import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { NatureNameType } from "../ts/NatureNameType";


export function createNatureName(data: NonNullable<Partial<NatureNameType>> = {}): NonNullable<NatureNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}