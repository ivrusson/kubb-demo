import { faker } from "@faker-js/faker";
import type { EncounterConditionValueSummaryType } from "../ts/EncounterConditionValueSummaryType";


export function createEncounterConditionValueSummary(data: NonNullable<Partial<EncounterConditionValueSummaryType>> = {}): NonNullable<EncounterConditionValueSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}