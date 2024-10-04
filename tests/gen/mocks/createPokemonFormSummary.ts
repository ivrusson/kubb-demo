import { faker } from "@faker-js/faker";
import type { PokemonFormSummaryType } from "../ts/PokemonFormSummaryType";


export function createPokemonFormSummary(data: NonNullable<Partial<PokemonFormSummaryType>> = {}): NonNullable<PokemonFormSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}