import { faker } from "@faker-js/faker";
import type { GenderSummaryType } from "../ts/GenderSummaryType";


export function createGenderSummary(data: NonNullable<Partial<GenderSummaryType>> = {}): NonNullable<GenderSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}