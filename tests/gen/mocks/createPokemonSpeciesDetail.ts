import { createGrowthRateSummary } from "./createGrowthRateSummary";
import { createPokemonDexEntry } from "./createPokemonDexEntry";
import { createPokemonColorSummary } from "./createPokemonColorSummary";
import { createPokemonShapeSummary } from "./createPokemonShapeSummary";
import { createPokemonSpeciesSummary } from "./createPokemonSpeciesSummary";
import { createEvolutionChainSummary } from "./createEvolutionChainSummary";
import { createPokemonHabitatSummary } from "./createPokemonHabitatSummary";
import { createGenerationSummary } from "./createGenerationSummary";
import { createPokemonSpeciesDescription } from "./createPokemonSpeciesDescription";
import { createPokemonSpeciesFlavorText } from "./createPokemonSpeciesFlavorText";
import { faker } from "@faker-js/faker";
import type { PokemonSpeciesDetailType } from "../ts/PokemonSpeciesDetailType";


export function createPokemonSpeciesDetail(data: NonNullable<Partial<PokemonSpeciesDetailType>> = {}): NonNullable<PokemonSpeciesDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "order": faker.number.int(), "gender_rate": faker.number.int(), "capture_rate": faker.number.int(), "base_happiness": faker.number.int(), "is_baby": faker.datatype.boolean(), "is_legendary": faker.datatype.boolean(), "is_mythical": faker.datatype.boolean(), "hatch_counter": faker.number.int(), "has_gender_differences": faker.datatype.boolean(), "forms_switchable": faker.datatype.boolean(), "growth_rate": createGrowthRateSummary(), "pokedex_numbers": faker.helpers.arrayElements([createPokemonDexEntry()]) as any, "egg_groups": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "color": createPokemonColorSummary(), "shape": createPokemonShapeSummary(), "evolves_from_species": createPokemonSpeciesSummary(), "evolution_chain": createEvolutionChainSummary(), "habitat": createPokemonHabitatSummary(), "generation": createGenerationSummary(), "names": faker.helpers.arrayElements([{ "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "name": faker.string.alpha() }]) as any, "pal_park_encounters": faker.helpers.arrayElements([{ "area": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "base_score": faker.number.int(), "rate": faker.number.int() }]) as any, "form_descriptions": faker.helpers.arrayElements([createPokemonSpeciesDescription()]) as any, "flavor_text_entries": faker.helpers.arrayElements([createPokemonSpeciesFlavorText()]) as any, "genera": faker.helpers.arrayElements([{ "genus": faker.string.alpha(), "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "varieties": faker.helpers.arrayElements([{ "is_default": faker.datatype.boolean(), "pokemon": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any },
        ...data
    };
}