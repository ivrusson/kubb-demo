import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ContestTypeNameType } from "../ts/ContestTypeNameType";


export function createContestTypeName(data: NonNullable<Partial<ContestTypeNameType>> = {}): NonNullable<ContestTypeNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "color": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}