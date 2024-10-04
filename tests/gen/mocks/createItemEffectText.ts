import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemEffectTextType } from "../ts/ItemEffectTextType";


export function createItemEffectText(data: NonNullable<Partial<ItemEffectTextType>> = {}): NonNullable<ItemEffectTextType> {
    faker.seed([100]);
    return {
        ...{ "effect": faker.string.alpha(), "short_effect": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}