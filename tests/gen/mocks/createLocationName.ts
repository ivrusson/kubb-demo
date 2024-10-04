import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { LocationNameType } from "../ts/LocationNameType";


export function createLocationName(data: NonNullable<Partial<LocationNameType>> = {}): NonNullable<LocationNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}