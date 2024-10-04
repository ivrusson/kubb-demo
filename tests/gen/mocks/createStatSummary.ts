import { faker } from "@faker-js/faker";
import type { StatSummaryType } from "../ts/StatSummaryType";


export function createStatSummary(data: NonNullable<Partial<StatSummaryType>> = {}): NonNullable<StatSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}