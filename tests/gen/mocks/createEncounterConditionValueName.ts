import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { EncounterConditionValueNameType } from "../ts/EncounterConditionValueNameType";


export function createEncounterConditionValueName(data: NonNullable<Partial<EncounterConditionValueNameType>> = {}): NonNullable<EncounterConditionValueNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}