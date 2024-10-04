import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveTargetNameType } from "../ts/MoveTargetNameType";


export function createMoveTargetName(data: NonNullable<Partial<MoveTargetNameType>> = {}): NonNullable<MoveTargetNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}