import { faker } from "@faker-js/faker";
import type { RegionSummaryType } from "../ts/RegionSummaryType";


export function createRegionSummary(data: NonNullable<Partial<RegionSummaryType>> = {}): NonNullable<RegionSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}