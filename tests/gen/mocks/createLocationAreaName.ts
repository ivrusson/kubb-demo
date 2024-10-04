import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { LocationAreaNameType } from "../ts/LocationAreaNameType";


export function createLocationAreaName(data: NonNullable<Partial<LocationAreaNameType>> = {}): NonNullable<LocationAreaNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}