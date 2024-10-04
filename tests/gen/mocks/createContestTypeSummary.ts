import { faker } from "@faker-js/faker";
import type { ContestTypeSummaryType } from "../ts/ContestTypeSummaryType";


export function createContestTypeSummary(data: NonNullable<Partial<ContestTypeSummaryType>> = {}): NonNullable<ContestTypeSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}