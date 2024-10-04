import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { VersionNameType } from "../ts/VersionNameType";


export function createVersionName(data: NonNullable<Partial<VersionNameType>> = {}): NonNullable<VersionNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}