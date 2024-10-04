import { faker } from "@faker-js/faker";
import type { VersionSummaryType } from "../ts/VersionSummaryType";


export function createVersionSummary(data: NonNullable<Partial<VersionSummaryType>> = {}): NonNullable<VersionSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}