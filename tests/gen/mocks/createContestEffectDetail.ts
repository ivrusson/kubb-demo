import { createContestEffectEffectText } from "./createContestEffectEffectText";
import { createContestEffectFlavorText } from "./createContestEffectFlavorText";
import { faker } from "@faker-js/faker";
import type { ContestEffectDetailType } from "../ts/ContestEffectDetailType";


export function createContestEffectDetail(data: NonNullable<Partial<ContestEffectDetailType>> = {}): NonNullable<ContestEffectDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "appeal": faker.number.int(), "jam": faker.number.int(), "effect_entries": faker.helpers.arrayElements([createContestEffectEffectText()]) as any, "flavor_text_entries": faker.helpers.arrayElements([createContestEffectFlavorText()]) as any },
        ...data
    };
}