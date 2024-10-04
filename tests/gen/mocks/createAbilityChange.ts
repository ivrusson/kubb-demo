import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { createAbilityChangeEffectText } from "./createAbilityChangeEffectText";
import { faker } from "@faker-js/faker";
import type { AbilityChangeType } from "../ts/AbilityChangeType";


export function createAbilityChange(data: NonNullable<Partial<AbilityChangeType>> = {}): NonNullable<AbilityChangeType> {
    faker.seed([100]);
    return {
        ...{ "version_group": createVersionGroupSummary(), "effect_entries": faker.helpers.arrayElements([createAbilityChangeEffectText()]) as any },
        ...data
    };
}