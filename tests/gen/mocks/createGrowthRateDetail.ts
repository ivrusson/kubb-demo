import { createGrowthRateDescription } from "./createGrowthRateDescription";
import { createExperience } from "./createExperience";
import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { faker } from "@faker-js/faker";
import type { GrowthRateDetailType } from "../ts/GrowthRateDetailType";


export function createGrowthRateDetail(data: NonNullable<Partial<GrowthRateDetailType>> = {}): NonNullable<GrowthRateDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "formula": faker.string.alpha(), "descriptions": faker.helpers.arrayElements([createGrowthRateDescription()]) as any, "levels": faker.helpers.arrayElements([createExperience()]) as any, "pokemon_species": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any },
        ...data
    };
}