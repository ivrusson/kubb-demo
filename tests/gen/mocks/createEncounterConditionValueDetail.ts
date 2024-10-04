import { createEncounterConditionSummary } from "./createEncounterConditionSummary";
import { createEncounterConditionValueName } from "./createEncounterConditionValueName";
import { faker } from "@faker-js/faker";
import type { EncounterConditionValueDetailType } from "../ts/EncounterConditionValueDetailType";


export function createEncounterConditionValueDetail(data: NonNullable<Partial<EncounterConditionValueDetailType>> = {}): NonNullable<EncounterConditionValueDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "condition": createEncounterConditionSummary(), "names": faker.helpers.arrayElements([createEncounterConditionValueName()]) as any },
        ...data
    };
}