import { createEggGroupName } from "./createEggGroupName";
import { faker } from "@faker-js/faker";
import type { EggGroupDetailType } from "../ts/EggGroupDetailType";


export function createEggGroupDetail(data: NonNullable<Partial<EggGroupDetailType>> = {}): NonNullable<EggGroupDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createEggGroupName()]) as any, "pokemon_species": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}