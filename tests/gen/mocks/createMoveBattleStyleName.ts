import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveBattleStyleNameType } from "../ts/MoveBattleStyleNameType";


export function createMoveBattleStyleName(data: NonNullable<Partial<MoveBattleStyleNameType>> = {}): NonNullable<MoveBattleStyleNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}