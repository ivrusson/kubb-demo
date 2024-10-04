import { createItemSummary } from "./createItemSummary";
import { faker } from "@faker-js/faker";
import type { EvolutionChainDetailType } from "../ts/EvolutionChainDetailType";


export function createEvolutionChainDetail(data: NonNullable<Partial<EvolutionChainDetailType>> = {}): NonNullable<EvolutionChainDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "baby_trigger_item": createItemSummary(), "chain": { "evolution_details": faker.helpers.arrayElements([undefined]) as any, "evolves_to": faker.helpers.arrayElements([{ "evolution_details": faker.helpers.arrayElements([{ "gender": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "held_item": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "item": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "known_move": undefined, "known_move_type": undefined, "location": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "min_affection": faker.number.int(), "min_beauty": faker.number.int(), "min_happiness": faker.number.int(), "min_level": faker.number.int(), "needs_overworld_rain": faker.datatype.boolean(), "party_species": faker.string.alpha(), "party_type": faker.string.alpha(), "relative_physical_stats": faker.string.alpha(), "time_of_day": faker.string.alpha(), "trade_species": faker.string.alpha(), "trigger": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }, "turn_upside_down": faker.datatype.boolean() }]) as any, "is_baby": faker.datatype.boolean(), "species": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "is_baby": faker.datatype.boolean(), "species": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } } },
        ...data
    };
}