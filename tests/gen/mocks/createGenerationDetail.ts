import { createAbilitySummary } from "./createAbilitySummary";
import { createRegionSummary } from "./createRegionSummary";
import { createMoveSummary } from "./createMoveSummary";
import { createGenerationName } from "./createGenerationName";
import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { createTypeSummary } from "./createTypeSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { GenerationDetailType } from "../ts/GenerationDetailType";


export function createGenerationDetail(data: NonNullable<Partial<GenerationDetailType>> = {}): NonNullable<GenerationDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "abilities": faker.helpers.arrayElements([createAbilitySummary()]) as any, "main_region": createRegionSummary(), "moves": faker.helpers.arrayElements([createMoveSummary()]) as any, "names": faker.helpers.arrayElements([createGenerationName()]) as any, "pokemon_species": faker.helpers.arrayElements([createPokemonSpeciesSummary()]) as any, "types": faker.helpers.arrayElements([createTypeSummary()]) as any, "version_groups": faker.helpers.arrayElements([createVersionGroupSummary()]) as any },
        ...data
    };
}