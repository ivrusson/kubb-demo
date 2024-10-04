import { createStatSummary } from "./createStatSummary";
import { createBerryFlavorSummary } from "./createBerryFlavorSummary";
import { createBerrySummary } from "./createBerrySummary";
import { createNatureBattleStylePreference } from "./createNatureBattleStylePreference";
import { createNatureName } from "./createNatureName";
import { faker } from "@faker-js/faker";
import type { NatureDetailType } from "../ts/NatureDetailType";


export function createNatureDetail(data: NonNullable<Partial<NatureDetailType>> = {}): NonNullable<NatureDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "decreased_stat": createStatSummary(), "increased_stat": createStatSummary(), "likes_flavor": createBerryFlavorSummary(), "hates_flavor": createBerryFlavorSummary(), "berries": faker.helpers.arrayElements([createBerrySummary()]) as any, "pokeathlon_stat_changes": faker.helpers.arrayElements([{ "max_change": faker.number.int(), "pokeathlon_stat": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "move_battle_style_preferences": faker.helpers.arrayElements([createNatureBattleStylePreference()]) as any, "names": faker.helpers.arrayElements([createNatureName()]) as any },
        ...data
    };
}