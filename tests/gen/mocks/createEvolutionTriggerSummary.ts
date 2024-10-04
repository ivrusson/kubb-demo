import { faker } from "@faker-js/faker";
import type { EvolutionTriggerSummaryType } from "../ts/EvolutionTriggerSummaryType";


export function createEvolutionTriggerSummary(data: NonNullable<Partial<EvolutionTriggerSummaryType>> = {}): NonNullable<EvolutionTriggerSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}