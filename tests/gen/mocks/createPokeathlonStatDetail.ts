import { createPokeathlonStatName } from "./createPokeathlonStatName";
import { faker } from "@faker-js/faker";
import type { PokeathlonStatDetailType } from "../ts/PokeathlonStatDetailType";


export function createPokeathlonStatDetail(data: NonNullable<Partial<PokeathlonStatDetailType>> = {}): NonNullable<PokeathlonStatDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "affecting_natures": { "decrease": faker.helpers.arrayElements([{ "max_change": faker.number.int(), "nature": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "increase": faker.helpers.arrayElements([{ "max_change": faker.number.int(), "nature": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }, "names": faker.helpers.arrayElements([createPokeathlonStatName()]) as any },
        ...data
    };
}