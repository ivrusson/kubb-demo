import { createBerrySummary } from "./createBerrySummary";
import { createBerryFirmnessName } from "./createBerryFirmnessName";
import { faker } from "@faker-js/faker";
import type { BerryFirmnessDetailType } from "../ts/BerryFirmnessDetailType";


export function createBerryFirmnessDetail(data: NonNullable<Partial<BerryFirmnessDetailType>> = {}): NonNullable<BerryFirmnessDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "berries": faker.helpers.arrayElements([createBerrySummary()]) as any, "names": faker.helpers.arrayElements([createBerryFirmnessName()]) as any },
        ...data
    };
}