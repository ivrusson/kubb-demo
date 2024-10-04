import { createGenerationSummary } from "./createGenerationSummary";
import { createAbilityName } from "./createAbilityName";
import { createAbilityEffectText } from "./createAbilityEffectText";
import { createAbilityChange } from "./createAbilityChange";
import { createAbilityFlavorText } from "./createAbilityFlavorText";
import { faker } from "@faker-js/faker";
import type { AbilityDetailType } from "../ts/AbilityDetailType";


export function createAbilityDetail(data: NonNullable<Partial<AbilityDetailType>> = {}): NonNullable<AbilityDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "is_main_series": faker.datatype.boolean(), "generation": createGenerationSummary(), "names": faker.helpers.arrayElements([createAbilityName()]) as any, "effect_entries": faker.helpers.arrayElements([createAbilityEffectText()]) as any, "effect_changes": faker.helpers.arrayElements([createAbilityChange()]) as any, "flavor_text_entries": faker.helpers.arrayElements([createAbilityFlavorText()]) as any, "pokemon": faker.helpers.arrayElements([{ "is_hidden": faker.datatype.boolean(), "slot": faker.number.int(), "pokemon": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any },
        ...data
    };
}