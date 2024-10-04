import { createStatSummary } from "./createStatSummary";
import { createCharacteristicDescription } from "./createCharacteristicDescription";
import { faker } from "@faker-js/faker";
import type { CharacteristicDetailType } from "../ts/CharacteristicDetailType";


export function createCharacteristicDetail(data: NonNullable<Partial<CharacteristicDetailType>> = {}): NonNullable<CharacteristicDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "gene_modulo": faker.number.int(), "possible_values": faker.helpers.arrayElements([faker.number.int()]) as any, "highest_stat": createStatSummary(), "descriptions": faker.helpers.arrayElements([createCharacteristicDescription()]) as any },
        ...data
    };
}