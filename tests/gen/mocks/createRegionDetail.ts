import { createLocationSummary } from "./createLocationSummary";
import { createGenerationSummary } from "./createGenerationSummary";
import { createRegionName } from "./createRegionName";
import { createPokedexSummary } from "./createPokedexSummary";
import { faker } from "@faker-js/faker";
import type { RegionDetailType } from "../ts/RegionDetailType";


export function createRegionDetail(data: NonNullable<Partial<RegionDetailType>> = {}): NonNullable<RegionDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "locations": faker.helpers.arrayElements([createLocationSummary()]) as any, "main_generation": Object.assign({}, createGenerationSummary()), "names": faker.helpers.arrayElements([createRegionName()]) as any, "pokedexes": faker.helpers.arrayElements([createPokedexSummary()]) as any, "version_groups": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}