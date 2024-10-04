import { createLanguageSummary } from "./createLanguageSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { AbilityFlavorTextType } from "../ts/AbilityFlavorTextType";


export function createAbilityFlavorText(data: NonNullable<Partial<AbilityFlavorTextType>> = {}): NonNullable<AbilityFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "flavor_text": faker.string.alpha(), "language": createLanguageSummary(), "version_group": createVersionGroupSummary() },
        ...data
    };
}