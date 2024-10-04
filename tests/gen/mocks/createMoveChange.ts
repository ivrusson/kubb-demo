import { createTypeSummary } from "./createTypeSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { MoveChangeType } from "../ts/MoveChangeType";


export function createMoveChange(data: NonNullable<Partial<MoveChangeType>> = {}): NonNullable<MoveChangeType> {
    faker.seed([100]);
    return {
        ...{ "accuracy": faker.number.int(), "power": faker.number.int(), "pp": faker.number.int(), "effect_chance": faker.number.int(), "effect_entries": faker.helpers.arrayElements([{ "effect": faker.string.alpha(), "short_effect": faker.string.alpha(), "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "type": createTypeSummary(), "version_group": createVersionGroupSummary() },
        ...data
    };
}