import { faker } from "@faker-js/faker";
import type { LocationSummaryType } from "../ts/LocationSummaryType";


export function createLocationSummary(data: NonNullable<Partial<LocationSummaryType>> = {}): NonNullable<LocationSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}