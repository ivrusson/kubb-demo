import { faker } from "@faker-js/faker";
import type { GenerationSummaryType } from "../ts/GenerationSummaryType";


export function createGenerationSummary(data: NonNullable<Partial<GenerationSummaryType>> = {}): NonNullable<GenerationSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}