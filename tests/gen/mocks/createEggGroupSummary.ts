import { faker } from "@faker-js/faker";
import type { EggGroupSummaryType } from "../ts/EggGroupSummaryType";


export function createEggGroupSummary(data: NonNullable<Partial<EggGroupSummaryType>> = {}): NonNullable<EggGroupSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}