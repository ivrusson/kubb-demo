import { faker } from "@faker-js/faker";
import type { ContestEffectSummaryType } from "../ts/ContestEffectSummaryType";


export function createContestEffectSummary(data: NonNullable<Partial<ContestEffectSummaryType>> = {}): NonNullable<ContestEffectSummaryType> {
    faker.seed([100]);
    return {
        ...{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}