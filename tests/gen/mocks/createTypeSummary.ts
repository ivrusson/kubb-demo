import { faker } from "@faker-js/faker";
import type { TypeSummaryType } from "../ts/TypeSummaryType";


export function createTypeSummary(data: NonNullable<Partial<TypeSummaryType>> = {}): NonNullable<TypeSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}