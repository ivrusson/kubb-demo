import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { BerryFirmnessNameType } from "../ts/BerryFirmnessNameType";


export function createBerryFirmnessName(data: NonNullable<Partial<BerryFirmnessNameType>> = {}): NonNullable<BerryFirmnessNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}