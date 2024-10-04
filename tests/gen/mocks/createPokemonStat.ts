import { createStatSummary } from "./createStatSummary";
import { faker } from "@faker-js/faker";
import type { PokemonStatType } from "../ts/PokemonStatType";


export function createPokemonStat(data: NonNullable<Partial<PokemonStatType>> = {}): NonNullable<PokemonStatType> {
    faker.seed([100]);
    return {
        ...{ "base_stat": faker.number.int(), "effort": faker.number.int(), "stat": createStatSummary() },
        ...data
    };
}