import { faker } from "@faker-js/faker";
import type { MachineSummaryType } from "../ts/MachineSummaryType";


export function createMachineSummary(data: NonNullable<Partial<MachineSummaryType>> = {}): NonNullable<MachineSummaryType> {
    faker.seed([100]);
    return {
        ...{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}