import { faker } from "@faker-js/faker";
import type { BerryFlavorSummaryType } from "../ts/BerryFlavorSummaryType";


export function createBerryFlavorSummary(data: NonNullable<Partial<BerryFlavorSummaryType>> = {}): NonNullable<BerryFlavorSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}