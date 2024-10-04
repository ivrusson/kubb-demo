import { createSuperContestEffectFlavorText } from "./createSuperContestEffectFlavorText";
import { createMoveSummary } from "./createMoveSummary";
import { faker } from "@faker-js/faker";
import type { SuperContestEffectDetailType } from "../ts/SuperContestEffectDetailType";


export function createSuperContestEffectDetail(data: NonNullable<Partial<SuperContestEffectDetailType>> = {}): NonNullable<SuperContestEffectDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "appeal": faker.number.int(), "flavor_text_entries": faker.helpers.arrayElements([createSuperContestEffectFlavorText()]) as any, "moves": faker.helpers.arrayElements([createMoveSummary()]) as any },
        ...data
    };
}