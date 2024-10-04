import { faker } from "@faker-js/faker";
import type { PokemonShapeSummaryType } from "../ts/PokemonShapeSummaryType";


export function createPokemonShapeSummary(data: NonNullable<Partial<PokemonShapeSummaryType>> = {}): NonNullable<PokemonShapeSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}