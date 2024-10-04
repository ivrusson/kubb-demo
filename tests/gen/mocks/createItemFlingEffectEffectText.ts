import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemFlingEffectEffectTextType } from "../ts/ItemFlingEffectEffectTextType";


export function createItemFlingEffectEffectText(data: NonNullable<Partial<ItemFlingEffectEffectTextType>> = {}): NonNullable<ItemFlingEffectEffectTextType> {
    faker.seed([100]);
    return {
        ...{ "effect": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}