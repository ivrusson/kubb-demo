import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { ItemAttributeDescriptionType } from "../ts/ItemAttributeDescriptionType";


export function createItemAttributeDescription(data: NonNullable<Partial<ItemAttributeDescriptionType>> = {}): NonNullable<ItemAttributeDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}