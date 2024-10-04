import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { EncounterConditionNameType } from "../ts/EncounterConditionNameType";


export function createEncounterConditionName(data: NonNullable<Partial<EncounterConditionNameType>> = {}): NonNullable<EncounterConditionNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}