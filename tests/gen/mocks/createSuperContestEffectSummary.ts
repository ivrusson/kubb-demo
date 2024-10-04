import { faker } from "@faker-js/faker";
import type { SuperContestEffectSummaryType } from "../ts/SuperContestEffectSummaryType";


export function createSuperContestEffectSummary(data: NonNullable<Partial<SuperContestEffectSummaryType>> = {}): NonNullable<SuperContestEffectSummaryType> {
    faker.seed([100]);
    return {
        ...{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}