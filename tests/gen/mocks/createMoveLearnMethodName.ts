import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveLearnMethodNameType } from "../ts/MoveLearnMethodNameType";


export function createMoveLearnMethodName(data: NonNullable<Partial<MoveLearnMethodNameType>> = {}): NonNullable<MoveLearnMethodNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}