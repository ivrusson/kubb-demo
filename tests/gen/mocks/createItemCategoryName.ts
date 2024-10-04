import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemCategoryNameType } from "../ts/ItemCategoryNameType";


export function createItemCategoryName(data: NonNullable<Partial<ItemCategoryNameType>> = {}): NonNullable<ItemCategoryNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}