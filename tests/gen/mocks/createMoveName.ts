import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveNameType } from "../ts/MoveNameType";


export function createMoveName(data: NonNullable<Partial<MoveNameType>> = {}): NonNullable<MoveNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}