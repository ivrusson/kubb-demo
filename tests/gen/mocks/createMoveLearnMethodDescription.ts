import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveLearnMethodDescriptionType } from "../ts/MoveLearnMethodDescriptionType";


export function createMoveLearnMethodDescription(data: NonNullable<Partial<MoveLearnMethodDescriptionType>> = {}): NonNullable<MoveLearnMethodDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}