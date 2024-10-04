import { createPalParkAreaName } from "./createPalParkAreaName";
import { faker } from "@faker-js/faker";
import type { PalParkAreaDetailType } from "../ts/PalParkAreaDetailType";


export function createPalParkAreaDetail(data: NonNullable<Partial<PalParkAreaDetailType>> = {}): NonNullable<PalParkAreaDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createPalParkAreaName()]) as any, "pokemon_encounters": faker.helpers.arrayElements([{ "base_score": faker.number.int(), "pokemon-species": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "rate": faker.number.int() }]) as any },
        ...data
    };
}