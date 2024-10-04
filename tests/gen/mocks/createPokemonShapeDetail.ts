import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { faker } from "@faker-js/faker";
import type { PokemonShapeDetailType } from "../ts/PokemonShapeDetailType";


export function createPokemonShapeDetail(data: NonNullable<Partial<PokemonShapeDetailType>> = {}): NonNullable<PokemonShapeDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "awesome_names": faker.helpers.arrayElements([{ "awesome_name": faker.string.alpha(), "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "names": faker.helpers.arrayElements([{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/", "name": faker.string.alpha() }]) as any, "pokemon_species": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any },
        ...data
    };
}