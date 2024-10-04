import { faker } from "@faker-js/faker";
import type { NatureSummaryType } from "../ts/NatureSummaryType";


export function createNatureSummary(data: NonNullable<Partial<NatureSummaryType>> = {}): NonNullable<NatureSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}