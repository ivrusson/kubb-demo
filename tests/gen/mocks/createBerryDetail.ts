import { createBerryFirmnessSummary } from "./createBerryFirmnessSummary";
import { createItemSummary } from "./createItemSummary";
import { createTypeSummary } from "./createTypeSummary";
import { faker } from "@faker-js/faker";
import type { BerryDetailType } from "../ts/BerryDetailType";


export function createBerryDetail(data: NonNullable<Partial<BerryDetailType>> = {}): NonNullable<BerryDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "growth_time": faker.number.int(), "max_harvest": faker.number.int(), "natural_gift_power": faker.number.int(), "size": faker.number.int(), "smoothness": faker.number.int(), "soil_dryness": faker.number.int(), "firmness": createBerryFirmnessSummary(), "flavors": faker.helpers.arrayElements([{ "potency": faker.number.int(), "flavor": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "item": createItemSummary(), "natural_gift_type": createTypeSummary() },
        ...data
    };
}