import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { StatNameType } from "../ts/StatNameType";


export function createStatName(data: NonNullable<Partial<StatNameType>> = {}): NonNullable<StatNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}