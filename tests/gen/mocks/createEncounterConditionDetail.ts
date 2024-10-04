import { createEncounterConditionValueSummary } from "./createEncounterConditionValueSummary";
import { createEncounterConditionName } from "./createEncounterConditionName";
import { faker } from "@faker-js/faker";
import type { EncounterConditionDetailType } from "../ts/EncounterConditionDetailType";


export function createEncounterConditionDetail(data: NonNullable<Partial<EncounterConditionDetailType>> = {}): NonNullable<EncounterConditionDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "values": faker.helpers.arrayElements([createEncounterConditionValueSummary()]) as any, "names": faker.helpers.arrayElements([createEncounterConditionName()]) as any },
        ...data
    };
}