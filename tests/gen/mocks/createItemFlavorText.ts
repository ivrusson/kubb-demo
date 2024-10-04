import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemFlavorTextType } from "../ts/ItemFlavorTextType";


export function createItemFlavorText(data: NonNullable<Partial<ItemFlavorTextType>> = {}): NonNullable<ItemFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "text": faker.string.alpha(), "version_group": createVersionGroupSummary(), "language": createLanguageSummary() },
        ...data
    };
}