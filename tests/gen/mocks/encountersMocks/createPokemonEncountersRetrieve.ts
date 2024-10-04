import { faker } from "@faker-js/faker";
import type { PokemonEncountersRetrievePathParamsType, PokemonEncountersRetrieve200Type, PokemonEncountersRetrieveQueryResponseType } from "../../ts/PokemonEncountersRetrieveType";


export function createPokemonEncountersRetrievePathParams(): NonNullable<PokemonEncountersRetrievePathParamsType> {
    faker.seed([100]);
    return { "pokemon_id": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.helpers.fromRegExp(new RegExp("^\\d+$"))]) };
}


export function createPokemonEncountersRetrieve200(): NonNullable<PokemonEncountersRetrieve200Type> {
    faker.seed([100]);
    return faker.helpers.arrayElements([{ "location_area": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version_details": faker.helpers.arrayElements([{ "encounter_details": faker.helpers.arrayElements([{ "chance": faker.number.float(), "condition_values": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "max_level": faker.number.float(), "method": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "min_level": faker.number.float() }]) as any, "max_chance": faker.number.float(), "version": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }]) as any;
}


export function createPokemonEncountersRetrieveQueryResponse(): NonNullable<PokemonEncountersRetrieveQueryResponseType> {
    faker.seed([100]);
    return faker.helpers.arrayElements([{ "location_area": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "version_details": faker.helpers.arrayElements([{ "encounter_details": faker.helpers.arrayElements([{ "chance": faker.number.float(), "condition_values": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "max_level": faker.number.float(), "method": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "min_level": faker.number.float() }]) as any, "max_chance": faker.number.float(), "version": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any }]) as any;
}