import { faker } from "@faker-js/faker";
import type { AbilitySummaryType } from "../ts/AbilitySummaryType";


export function createAbilitySummary(data: NonNullable<Partial<AbilitySummaryType>> = {}): NonNullable<AbilitySummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}