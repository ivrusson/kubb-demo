import { createMoveMetaAilmentSummary } from "./createMoveMetaAilmentSummary";
import { createMoveMetaCategorySummary } from "./createMoveMetaCategorySummary";
import { faker } from "@faker-js/faker";
import type { MoveMetaType } from "../ts/MoveMetaType";


export function createMoveMeta(data: NonNullable<Partial<MoveMetaType>> = {}): NonNullable<MoveMetaType> {
    faker.seed([100]);
    return {
        ...{ "ailment": createMoveMetaAilmentSummary(), "category": createMoveMetaCategorySummary(), "min_hits": faker.number.int(), "max_hits": faker.number.int(), "min_turns": faker.number.int(), "max_turns": faker.number.int(), "drain": faker.number.int(), "healing": faker.number.int(), "crit_rate": faker.number.int(), "ailment_chance": faker.number.int(), "flinch_chance": faker.number.int(), "stat_chance": faker.number.int() },
        ...data
    };
}