import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { AbilityChangeEffectTextType } from "../ts/AbilityChangeEffectTextType";


export function createAbilityChangeEffectText(data: NonNullable<Partial<AbilityChangeEffectTextType>> = {}): NonNullable<AbilityChangeEffectTextType> {
    faker.seed([100]);
    return {
        ...{ "effect": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}