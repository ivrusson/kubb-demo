import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemNameType } from "../ts/ItemNameType";


export function createItemName(data: NonNullable<Partial<ItemNameType>> = {}): NonNullable<ItemNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}