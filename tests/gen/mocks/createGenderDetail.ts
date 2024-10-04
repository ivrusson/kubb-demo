import { faker } from "@faker-js/faker";
import type { GenderDetailType } from "../ts/GenderDetailType";


export function createGenderDetail(data: NonNullable<Partial<GenderDetailType>> = {}): NonNullable<GenderDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "pokemon_species_details": faker.helpers.arrayElements([{ "rate": faker.number.int(), "pokemon_species": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "required_for_evolution": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}