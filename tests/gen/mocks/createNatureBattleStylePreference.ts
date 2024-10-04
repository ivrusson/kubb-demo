import { createMoveBattleStyleSummary } from "./createMoveBattleStyleSummary";
import { faker } from "@faker-js/faker";
import type { NatureBattleStylePreferenceType } from "../ts/NatureBattleStylePreferenceType";


export function createNatureBattleStylePreference(data: NonNullable<Partial<NatureBattleStylePreferenceType>> = {}): NonNullable<NatureBattleStylePreferenceType> {
    faker.seed([100]);
    return {
        ...{ "low_hp_preference": faker.number.int(), "high_hp_preference": faker.number.int(), "move_battle_style": createMoveBattleStyleSummary() },
        ...data
    };
}