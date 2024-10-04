import { faker } from "@faker-js/faker";
import type { LanguageSummaryType } from "../ts/LanguageSummaryType";


export function createLanguageSummary(data: NonNullable<Partial<LanguageSummaryType>> = {}): NonNullable<LanguageSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}