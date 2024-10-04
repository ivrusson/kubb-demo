import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { PalParkAreaNameType } from "../ts/PalParkAreaNameType";


export function createPalParkAreaName(data: NonNullable<Partial<PalParkAreaNameType>> = {}): NonNullable<PalParkAreaNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}