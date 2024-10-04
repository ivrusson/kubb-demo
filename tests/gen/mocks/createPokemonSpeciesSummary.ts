import { faker } from "@faker-js/faker";
import type { PokemonSpeciesSummaryType } from "../ts/PokemonSpeciesSummaryType";


export function createPokemonSpeciesSummary(data: NonNullable<Partial<PokemonSpeciesSummaryType>> = {}): NonNullable<PokemonSpeciesSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}