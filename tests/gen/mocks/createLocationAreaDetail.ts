import { createLocationSummary } from "./createLocationSummary";
import { createLocationAreaName } from "./createLocationAreaName";
import { faker } from "@faker-js/faker";
import type { LocationAreaDetailType } from "../ts/LocationAreaDetailType";


export function createLocationAreaDetail(data: NonNullable<Partial<LocationAreaDetailType>> = {}): NonNullable<LocationAreaDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "game_index": faker.number.int(), "encounter_method_rates": faker.helpers.arrayElements([{ "encounter_method": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version_details": faker.helpers.arrayElements([{ "rate": faker.number.int(), "version": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }]) as any, "location": createLocationSummary(), "names": faker.helpers.arrayElements([createLocationAreaName()]) as any, "pokemon_encounters": faker.helpers.arrayElements([{ "pokemon": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version_details": faker.helpers.arrayElements([{ "version": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "max_chance": faker.number.int(), "encounter_details": { "min_level": faker.number.int(), "max_level": faker.number.int(), "condition_values": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "chance": faker.number.int(), "method": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } } }]) as any }]) as any },
        ...data
    };
}