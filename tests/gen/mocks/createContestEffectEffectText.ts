import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ContestEffectEffectTextType } from "../ts/ContestEffectEffectTextType";


export function createContestEffectEffectText(data: NonNullable<Partial<ContestEffectEffectTextType>> = {}): NonNullable<ContestEffectEffectTextType> {
    faker.seed([100]);
    return {
        ...{ "effect": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}