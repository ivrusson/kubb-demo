import { faker } from "@faker-js/faker";
import type { BerryFirmnessSummaryType } from "../ts/BerryFirmnessSummaryType";


export function createBerryFirmnessSummary(data: NonNullable<Partial<BerryFirmnessSummaryType>> = {}): NonNullable<BerryFirmnessSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}