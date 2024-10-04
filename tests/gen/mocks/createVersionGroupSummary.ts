import { faker } from "@faker-js/faker";
import type { VersionGroupSummaryType } from "../ts/VersionGroupSummaryType";


export function createVersionGroupSummary(data: NonNullable<Partial<VersionGroupSummaryType>> = {}): NonNullable<VersionGroupSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}