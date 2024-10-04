import { faker } from "@faker-js/faker";
import type { PokemonColorSummaryType } from "../ts/PokemonColorSummaryType";


export function createPokemonColorSummary(data: NonNullable<Partial<PokemonColorSummaryType>> = {}): NonNullable<PokemonColorSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}