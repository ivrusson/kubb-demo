import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { AbilityEffectTextType } from "../ts/AbilityEffectTextType";


export function createAbilityEffectText(data: NonNullable<Partial<AbilityEffectTextType>> = {}): NonNullable<AbilityEffectTextType> {
    faker.seed([100]);
    return {
        ...{ "effect": faker.string.alpha(), "short_effect": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}