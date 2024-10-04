import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { SuperContestEffectFlavorTextType } from "../ts/SuperContestEffectFlavorTextType";


export function createSuperContestEffectFlavorText(data: NonNullable<Partial<SuperContestEffectFlavorTextType>> = {}): NonNullable<SuperContestEffectFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "flavor_text": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}