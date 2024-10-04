import { faker } from "@faker-js/faker";
import type { EncounterMethodSummaryType } from "../ts/EncounterMethodSummaryType";


export function createEncounterMethodSummary(data: NonNullable<Partial<EncounterMethodSummaryType>> = {}): NonNullable<EncounterMethodSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}