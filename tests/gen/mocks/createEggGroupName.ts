import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { EggGroupNameType } from "../ts/EggGroupNameType";


export function createEggGroupName(data: NonNullable<Partial<EggGroupNameType>> = {}): NonNullable<EggGroupNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}