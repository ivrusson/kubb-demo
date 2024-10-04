import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ContestEffectFlavorTextType } from "../ts/ContestEffectFlavorTextType";


export function createContestEffectFlavorText(data: NonNullable<Partial<ContestEffectFlavorTextType>> = {}): NonNullable<ContestEffectFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "flavor_text": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}