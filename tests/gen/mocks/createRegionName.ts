import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { RegionNameType } from "../ts/RegionNameType";


export function createRegionName(data: NonNullable<Partial<RegionNameType>> = {}): NonNullable<RegionNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}