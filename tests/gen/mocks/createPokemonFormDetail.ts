import { createPokemonSummary } from "./createPokemonSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { PokemonFormDetailType } from "../ts/PokemonFormDetailType";


export function createPokemonFormDetail(data: NonNullable<Partial<PokemonFormDetailType>> = {}): NonNullable<PokemonFormDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "order": faker.number.int(), "form_order": faker.number.int(), "is_default": faker.datatype.boolean(), "is_battle_only": faker.datatype.boolean(), "is_mega": faker.datatype.boolean(), "form_name": faker.string.alpha(), "pokemon": createPokemonSummary(), "sprites": { "default": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]) }, "version_group": createVersionGroupSummary(), "form_names": faker.helpers.arrayElements([{ "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "name": faker.string.alpha() }]) as any, "names": faker.helpers.arrayElements([{ "language": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "name": faker.string.alpha() }]) as any, "types": faker.helpers.arrayElements([{ "slot": faker.number.int(), "type": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any },
        ...data
    };
}