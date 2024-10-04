import { faker } from "@faker-js/faker";
import type { MoveSummaryType } from "../ts/MoveSummaryType";


export function createMoveSummary(data: NonNullable<Partial<MoveSummaryType>> = {}): NonNullable<MoveSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}