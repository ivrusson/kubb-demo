import { faker } from "@faker-js/faker";
import type { PokemonSummaryType } from "../ts/PokemonSummaryType";


export function createPokemonSummary(data: NonNullable<Partial<PokemonSummaryType>> = {}): NonNullable<PokemonSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}