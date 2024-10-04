import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemAttributeNameType } from "../ts/ItemAttributeNameType";


export function createItemAttributeName(data: NonNullable<Partial<ItemAttributeNameType>> = {}): NonNullable<ItemAttributeNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}