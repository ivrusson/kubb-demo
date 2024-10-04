import { faker } from "@faker-js/faker";
import type { GrowthRateSummaryType } from "../ts/GrowthRateSummaryType";


export function createGrowthRateSummary(data: NonNullable<Partial<GrowthRateSummaryType>> = {}): NonNullable<GrowthRateSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}