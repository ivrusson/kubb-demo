import { createPokedexDescription } from "./createPokedexDescription";
import { createPokedexName } from "./createPokedexName";
import { createRegionSummary } from "./createRegionSummary";
import { faker } from "@faker-js/faker";
import type { PokedexDetailType } from "../ts/PokedexDetailType";


export function createPokedexDetail(data: NonNullable<Partial<PokedexDetailType>> = {}): NonNullable<PokedexDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "is_main_series": faker.datatype.boolean(), "descriptions": faker.helpers.arrayElements([createPokedexDescription()]) as any, "names": faker.helpers.arrayElements([createPokedexName()]) as any, "pokemon_entries": faker.helpers.arrayElements([{ "entry_number": faker.number.int(), "pokemon_species": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "region": createRegionSummary(), "version_groups": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}