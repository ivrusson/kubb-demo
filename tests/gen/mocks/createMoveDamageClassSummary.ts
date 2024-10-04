import { faker } from "@faker-js/faker";
import type { MoveDamageClassSummaryType } from "../ts/MoveDamageClassSummaryType";


export function createMoveDamageClassSummary(data: NonNullable<Partial<MoveDamageClassSummaryType>> = {}): NonNullable<MoveDamageClassSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}