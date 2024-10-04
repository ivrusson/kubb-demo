import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { EvolutionTriggerNameType } from "../ts/EvolutionTriggerNameType";


export function createEvolutionTriggerName(data: NonNullable<Partial<EvolutionTriggerNameType>> = {}): NonNullable<EvolutionTriggerNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}