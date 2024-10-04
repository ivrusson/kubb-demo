import { faker } from "@faker-js/faker";
import type { PokemonHabitatSummaryType } from "../ts/PokemonHabitatSummaryType";


export function createPokemonHabitatSummary(data: NonNullable<Partial<PokemonHabitatSummaryType>> = {}): NonNullable<PokemonHabitatSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}