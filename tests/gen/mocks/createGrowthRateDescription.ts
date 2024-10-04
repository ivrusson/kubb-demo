import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { GrowthRateDescriptionType } from "../ts/GrowthRateDescriptionType";


export function createGrowthRateDescription(data: NonNullable<Partial<GrowthRateDescriptionType>> = {}): NonNullable<GrowthRateDescriptionType> {
    faker.seed([100]);
    return {
        ...{ "description": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}