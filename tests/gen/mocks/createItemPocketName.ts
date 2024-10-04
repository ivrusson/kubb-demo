import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemPocketNameType } from "../ts/ItemPocketNameType";


export function createItemPocketName(data: NonNullable<Partial<ItemPocketNameType>> = {}): NonNullable<ItemPocketNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}