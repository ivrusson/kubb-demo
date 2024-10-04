import { faker } from "@faker-js/faker";
import type { EncounterConditionSummaryType } from "../ts/EncounterConditionSummaryType";


export function createEncounterConditionSummary(data: NonNullable<Partial<EncounterConditionSummaryType>> = {}): NonNullable<EncounterConditionSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}