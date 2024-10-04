import { createPokedexSummary } from "./createPokedexSummary";
import { faker } from "@faker-js/faker";
import type { PokemonDexEntryType } from "../ts/PokemonDexEntryType";


export function createPokemonDexEntry(data: NonNullable<Partial<PokemonDexEntryType>> = {}): NonNullable<PokemonDexEntryType> {
    faker.seed([100]);
    return {
        ...{ "entry_number": faker.number.int(), "pokedex": createPokedexSummary() },
        ...data
    };
}