import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveMetaCategoryDescriptionType } from "../ts/MoveMetaCategoryDescriptionType";


export function createMoveMetaCategoryDescription(data: NonNullable<Partial<MoveMetaCategoryDescriptionType>> = {}): NonNullable<MoveMetaCategoryDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}