import { faker } from "@faker-js/faker";
import type { LocationAreaSummaryType } from "../ts/LocationAreaSummaryType";


export function createLocationAreaSummary(data: NonNullable<Partial<LocationAreaSummaryType>> = {}): NonNullable<LocationAreaSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}