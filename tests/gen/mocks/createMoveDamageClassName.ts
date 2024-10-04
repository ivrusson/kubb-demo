import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveDamageClassNameType } from "../ts/MoveDamageClassNameType";


export function createMoveDamageClassName(data: NonNullable<Partial<MoveDamageClassNameType>> = {}): NonNullable<MoveDamageClassNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}