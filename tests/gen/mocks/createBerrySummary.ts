import { faker } from "@faker-js/faker";
import type { BerrySummaryType } from "../ts/BerrySummaryType";


export function createBerrySummary(data: NonNullable<Partial<BerrySummaryType>> = {}): NonNullable<BerrySummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}