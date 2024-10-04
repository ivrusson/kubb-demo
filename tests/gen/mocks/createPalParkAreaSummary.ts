import { faker } from "@faker-js/faker";
import type { PalParkAreaSummaryType } from "../ts/PalParkAreaSummaryType";


export function createPalParkAreaSummary(data: NonNullable<Partial<PalParkAreaSummaryType>> = {}): NonNullable<PalParkAreaSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}