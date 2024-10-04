import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveTargetDescriptionType } from "../ts/MoveTargetDescriptionType";


export function createMoveTargetDescription(data: NonNullable<Partial<MoveTargetDescriptionType>> = {}): NonNullable<MoveTargetDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}