import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveDamageClassDescriptionType } from "../ts/MoveDamageClassDescriptionType";


export function createMoveDamageClassDescription(data: NonNullable<Partial<MoveDamageClassDescriptionType>> = {}): NonNullable<MoveDamageClassDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}