import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { BerryFlavorNameType } from "../ts/BerryFlavorNameType";


export function createBerryFlavorName(data: NonNullable<Partial<BerryFlavorNameType>> = {}): NonNullable<BerryFlavorNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}