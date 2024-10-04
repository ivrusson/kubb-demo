import { createContestTypeSummary } from "./createContestTypeSummary";
import { createContestEffectSummary } from "./createContestEffectSummary";
import { createMoveDamageClassSummary } from "./createMoveDamageClassSummary";
import { createGenerationSummary } from "./createGenerationSummary";
import { createMoveMeta } from "./createMoveMeta";
import { createMoveName } from "./createMoveName";
import { createMoveChange } from "./createMoveChange";
import { createSuperContestEffectSummary } from "./createSuperContestEffectSummary";
import { createMoveTargetSummary } from "./createMoveTargetSummary";
import { createTypeSummary } from "./createTypeSummary";
import { createMoveFlavorText } from "./createMoveFlavorText";
import { faker } from "@faker-js/faker";
import type { MoveDetailType } from "../ts/MoveDetailType";


export function createMoveDetail(data: NonNullable<Partial<MoveDetailType>> = {}): NonNullable<MoveDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "accuracy": faker.number.int(), "effect_chance": faker.number.int(), "pp": faker.number.int(), "priority": faker.number.int(), "power": faker.number.int(), "contest_combos": { "normal": { "use_before": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "use_after": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any }, "super": { "use_before": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "use_after": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any } }, "contest_type": createContestTypeSummary(), "contest_effect": createContestEffectSummary(), "damage_class": createMoveDamageClassSummary(), "effect_entries": faker.helpers.arrayElements([{ "effect": faker.string.alpha(), "short_effect": faker.string.alpha(), "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "effect_changes": faker.helpers.arrayElements([{ "effect_entries": faker.helpers.arrayElements([{ "effect": faker.string.alpha(), "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "version_group": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "generation": createGenerationSummary(), "meta": Object.assign({}, createMoveMeta()), "names": faker.helpers.arrayElements([createMoveName()]) as any, "past_values": faker.helpers.arrayElements([createMoveChange()]) as any, "stat_changes": faker.helpers.arrayElements([{ "change": faker.number.int(), "stat": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "super_contest_effect": createSuperContestEffectSummary(), "target": createMoveTargetSummary(), "type": createTypeSummary(), "machines": faker.helpers.arrayElements([{ "machine": { "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version_group": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "flavor_text_entries": faker.helpers.arrayElements([createMoveFlavorText()]) as any, "learned_by_pokemon": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}